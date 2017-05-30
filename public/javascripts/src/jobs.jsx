var React = require('react');
var request = require('request');
var Job = require('./Job.jsx');

class Jobs extends React.Component {
  constructor(props) {
    super(props)
    /*this.state = {
      data: [
        {
          company: 'TrackMaven',
          position: 'Software Maven',
          local: 'Washington, DC, USA',
          lookingFor: 'Angular.js, Django, ElasticSearch',
          postedDate: '4 April 2015',
          description: '',
          category: 'Engineering'
        },
        {
          company: 'TrackMaven',
          position: 'Junior Software Maven',
          local: 'Washington, DC, USA',
          lookingFor: 'Javascript, Python',
          postedDate: '4 April 2015',
          description: '',
          category: 'Engineering'
        }
      ]
    }*/
    this.state = { data: [] }
  }
  componentDidMount() {
    request('http://localhost:3000/api/jobs/', function (error, response, body) {
      var result = JSON.parse(body);
      console.log(result)
      //if (this.isMounted()) {
        this.setState({data:result.data.jobs});
      //}
    }.bind(this));
  }
  render() {
    return (
      <div className='list-group'>
        {
          this.state.data.map(job => {
            return (
              <Job
                key={job.job_id}
                id={job.job_id}
                company={job.company}
                position={job.position}
                local={job.local}
                lookingFor={job.lookingFor}
                postedDate={job.postedDate}
                description={job.description}
                category={job.category}
              />
            )
          })
        }
      </div>
    )
  }
}

module.exports = Jobs