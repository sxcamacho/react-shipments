import React, { Component } from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import IStopPoint from "../../Interfaces/IStopPoint";
import IItineraryProps from "../../Interfaces/IItineraryProps";
import styled, { css } from "styled-components";
import { deleteStopPoint, updateStopPointAsCompleted, updateStopPointAsUncompleted } from "../../../../redux/features/itinerary/itinerarySlice";

class StopPointList extends Component<IItineraryProps> {
  handleDeleteStopPoint(stopPoint: IStopPoint) {
    if (stopPoint.id) {
      this.props.dispatch(deleteStopPoint(stopPoint.id));
    }
  }

  handleEditStopPoint(stopPoint: IStopPoint) {
    if (stopPoint.id) {
      this.props.dispatch(change("stopPoint", "id", stopPoint.id));
      this.props.dispatch(change("stopPoint", "name", stopPoint.name));
      this.props.dispatch(change("stopPoint", "address", stopPoint.address));
    }
  }

  renderStopPoints() {
    return this.props.itinerary.map((stopPoint: IStopPoint) => {
      const isStopPointCompleted = stopPoint.completed ? true : false;

      return (
        <tr
          key={stopPoint.id}
          className={`${stopPoint.completed ? "completed" : ""}`}
        >
          <StyledColumn>
            <StyledLabel
              className="checkbox"
              stopPointCompleted={isStopPointCompleted}
            >
              <StyledCheckbox
                onClick={(event) =>
                  this.onChangeStopPointCompleted(stopPoint, event)
                }
                defaultChecked={stopPoint.completed}
              />
              {stopPoint.id}
            </StyledLabel>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel stopPointCompleted={isStopPointCompleted}>
              {stopPoint.name}
            </StyledLabel>
          </StyledColumn>
          <StyledColumn>
            <StyledLabel stopPointCompleted={isStopPointCompleted}>
              {stopPoint.formattedAddress}
            </StyledLabel>
          </StyledColumn>
          <StyledColumn>
            <ActionContainer>
              <p className="buttons buttons-right">
                <button
                  className="button is-small"
                  onClick={() => this.handleEditStopPoint(stopPoint)}
                >
                  <span className="icon is-small">
                    <i className="fas fa-pen"></i>
                  </span>
                </button>
                <button
                  className="button is-small"
                  onClick={() => this.handleDeleteStopPoint(stopPoint)}
                >
                  <span className="icon is-small">
                    <i className="fas fa-trash"></i>
                  </span>
                </button>
              </p>
            </ActionContainer>
          </StyledColumn>
        </tr>
      );
    });
  }

  renderTotalRecords() {
    const stopPointsTotal = this.props.itinerary.length;
    const stopPointsTotaCompleted = this.props.itinerary.filter(
      (stopPoint: IStopPoint) => stopPoint.completed
    ).length;

    return (
      <tr>
        <td colSpan={4}>
          <TotalContainer>
            Total stops: {`${stopPointsTotaCompleted}/${stopPointsTotal}`}
          </TotalContainer>
        </td>
      </tr>
    );
  }

  onChangeStopPointCompleted(stopPoint: IStopPoint, event: any) {
    if (stopPoint.id) {
      const completed: boolean = event.target.checked;
      if (completed) {
        this.props.dispatch(updateStopPointAsCompleted(stopPoint.id));
      } else {
        this.props.dispatch(updateStopPointAsUncompleted(stopPoint.id));
      }
    }
  }

  renderTable() {
    return (
      <div className="table-container">
        <table className="table is-striped is-hoverable  is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderStopPoints()}</tbody>
          <tfoot>{this.renderTotalRecords()}</tfoot>
        </table>
      </div>
    );
  }

  renderEmptyMessage() {
    return (
      <article className="message">
        <div className="message-body">
          The itinerary is empty, please enter the first stop point.
        </div>
      </article>
    );
  }

  render() {
    return (
      <div className="stop-point-list" data-testid="stop-point-list">
        {this.props.itinerary.length
          ? this.renderTable()
          : this.renderEmptyMessage()}
      </div>
    );
  }
}

// styles
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  line-height: 30px;

  ${(props: { stopPointCompleted: boolean; forCheckbox?: boolean }) => {
    return (
      props.stopPointCompleted &&
      css`
        text-decoration: line-through;
      `
    );
  }}
`;

const StyledColumn = styled.td`
  vertical-align: top;
`;

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  font-size: 1em;
  margin-right: 10px;
`;

const ActionContainer = styled.div`
  min-width: 70px;
  float: right;
`;

const TotalContainer = styled.div`
  font-style: italic;
  padding: 10px;
`;

// redux
const mapStateToProps = (state: any) => {
  return {
    itinerary: state.itinerary,
  };
};

export default connect(mapStateToProps)(StopPointList);
