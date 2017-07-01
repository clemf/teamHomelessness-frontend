import React from 'react';
import { connect } from 'react-redux';
import HalfDonutChart from '../Reuseable/HalfDonutChart/HalfDonutChart';
import OriginTreemap from './OriginTreemap';
import { TitleNav } from '../Reuseable';
import StoryCard from '@hackoregon/component-library/lib/StoryCard/StoryCard';
import shared from '../shared.styles';
import { fetchMigrationDemoData } from '../../state/Migration/actions';

const arrivalData = [{
  name: '2015 - 2017',
  data: [
    {
      name: 'Arrived Homeless',
      value: 12,
    },
    {
      name: 'Arrived Sheltered',
      value: 88,
    },
  ],
}];

class Migration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalData,
    };
  }
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    return (
      <TitleNav
        title="Homeless Migration"
      >
        <StoryCard>
          <div>
            <div>
              <h2>Between 2013 and 2015, among the newly arrived unsheltered</h2>
            </div>
            <HalfDonutChart dataSets={arrivalData} renderLinks={false} legend={false} />
            <div>
              <h2>were homeless on arrival</h2>
              <p style={shared.text}>This number represents the percentage of the unsheltered population that moved to Multnomah County in the two years since the previous PIT survey (i.e. from 2013 to 2015).</p>
              <h2 style={shared.header}>And most of them came from outside the Pacific Northwest</h2>
            </div>
            <OriginTreemap />
            <div>
              <p style={shared.footnote}>*Portland Metro Areas include Clackamas, Washington, and Clark Counties</p>
              <p style={shared.footnote}>*Those who responded Portland migrated from East County.</p>
              <p style={shared.footnote}>This data extrapolates demographics from the unsheltered population to all homeless.</p>
            </div>
          </div>
        </StoryCard>
      </TitleNav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(fetchMigrationDemoData()),
});

const mapStateToProps = state => ({
  treeData: [state.migration.migrationDemoData],
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Migration);
