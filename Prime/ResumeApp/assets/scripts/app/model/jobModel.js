/**
 * Job Model created the datamodel for the job object
 */
resumeApp.factory('jobModel', function () {
    'use strict';
    function job(jobData) {
        this.id = jobData.id;
        this.name = jobData.name;
        this.startDate = jobData.startDate;
        this.endDate = jobData.endDate;
        this.title = jobData.title;
        this.logo = jobData.logo;
        this.website = jobData.website;
        this.description = jobData.description;
        this.points = jobData.points;
    }

    return job;
});