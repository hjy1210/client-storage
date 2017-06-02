var express = require('express');
var router = express.Router();

var jobs = {
  jobs: [
    {
      job_id: 1,
      company: 'TrackMaven $x^3$',
      position: 'Software Maven\\[x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\]',
      local: 'Washington, DC, USA',
      lookingFor: 'Angular.js, Django, ElasticSearch',
      postedDate: '4 April 2015',
      description: '',
      category: 'Engineering'
    },
    {
      job_id: 2,
      company: 'TrackMaven \\(x^2\\)',
      position: 'Junior Software Maven',
      local: 'Washington, DC, USA',
      lookingFor: 'Javascript, Python',
      postedDate: '4 April 2015',
      description: '',
      category: 'Engineering'
    },
    {
      job_id: 3,
      company: 'IBM',
      position: 'Senior Software Manager',
      local: 'Taiwan',
      lookingFor: 'React, Python',
      postedDate: '4 April 2017',
      description: '\(x^2\)',
      category: 'Engineering'
    }

  ]
}

router.get('/', function(req, res, next) {
  res.render('api', { title: 'Express+React' });
});

router.get('/jobs', function(req, res) {
    res.json({data: jobs});
})

router.get('/jobs/:job_id', function(req, res) {
    var job_id = req.params.job_id;
    console.log(job_id)
    for (i = 0, len = jobs.jobs.length; i < len; i++) {
        if (jobs.jobs[i].job_id === parseInt(job_id)) {
            console.log(jobs.jobs[i])
            res.json({data: jobs.jobs[i]});
            return
        }
    }
    res.json({data: "No job found..."});
})

module.exports = router;
