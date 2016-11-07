/**
 * Created by ajander on 11/5/2016.
 */
var resumeApp = angular.module('resumeApp', ['ngMaterial']);

resumeApp.controller('resumeController', function ($scope) {
    'use strict';
    var vm = this;
    vm.isEditing = false;

    /**
     * Togles the stare of isEditing
     */
    vm.toggleEditing = function () {
        vm.isEditing = !vm.isEditing;
    };


    // This should be gotten by database API that calls calls the collection module
    vm.user = {
        name: 'Abraham Anderson',
        address1: '7930 Sunnyside Rd',
        address2: '',
        city: 'Mounds View',
        state: 'MN',
        zip: '55112',
        phone: '763-443-8739',
        email: 'Abeis@msn.com'
    };
    vm.jobCollection = [
        {
            name: 'Consolidated Communications',
            startDate: '8/2016',
            endDate: ' Present',
            title: 'Noc Technician',
            logo: 'assets/media/consolidatedlogo.png',
            website: 'https://www.consolidated.com/',
            description: 'Tier 2 technical support as well as working with a variety of servers in the data center.',
            points: [
                'Monitor and configure cisco switches',
                'Troubleshoot circuts t1/t3 shdsl/ fiber',
                'Configure bussness class cisco phones/ voicemail/ Auto Attendants  and Jabber clients',
                'Devloped automation tools in Visual Basics and Excel']
        },
        {
            name: 'US Internet',
            startDate: '04/2014',
            endDate: ' 08/2016',
            title: 'Noc Technician',
            logo: 'http://www.zcorum.com/wp-content/uploads/us-internet-logo.jpg',
            website: 'http://www.usinternet.com/',
            description: 'Tier 2 technical support as well as working with a variety of servers in the data center.',
            points: [
                'Hardware troubleshooting and replacing and repairing servers',
                'DNS and web servers',
                'Troubleshooting Fiber Network and Network Monitoring',
                'Pc setup and deployment  Internal Computer Support',
                'PHP HTML CSS JavaScript programming and web development.']
        },
        {
            name: 'Unisys',
            startDate: '09/2013',
            endDate: ' 04/2014',
            title: 'Dell Field Technician',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Unisys_logo.svg',
            website: 'http://www.unisys.com/',
            description: 'Fix Dell products out in the field by doing hardware repairs and diagnostics.',
            points: [
                'Physical understanding on how laptops are build and operate.',
                'Knowledge on how to diagnose and repair computers in the field.',
                'Order parts for repairs if necessary.',
                'Plan and organize the optimal route to best serve the customer']
        }
    ];

    vm.educationCollection = [
        {
            name: 'Century College',
            graduation: '2012',
            degree: 'AAS, EMT',
            logo: 'assets/media/caduceus.png',
            details: ''
        },
        {
            name: 'Anoka Ramsey Communcity College',
            graduation: '2009',
            degree: 'AAS',
            logo: '',
            details: ''
        },
        {
            name: 'Zhaoqing University',
            graduation: '2009',
            degree: '',
            logo: '',
            details: 'Studied abroad in China in Zhaoqing city studying the Chinese language and culture. During this time I helped with the English club at the school along with doing promotional events.'
        }


    ];


});