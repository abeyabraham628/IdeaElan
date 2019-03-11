webpackJsonp([8],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__policy__ = __webpack_require__(838);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PolicyPageModule = /** @class */ (function () {
    function PolicyPageModule() {
    }
    PolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__policy__["a" /* PolicyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__policy__["a" /* PolicyPage */]),
            ],
        })
    ], PolicyPageModule);
    return PolicyPageModule;
}());

//# sourceMappingURL=policy.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PolicyPage = /** @class */ (function () {
    function PolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companyLogo = 'assets/imgs/companylogo.png';
    }
    PolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PolicyPage');
    };
    PolicyPage.prototype.popPage = function () {
        this.navCtrl.pop();
    };
    PolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-policy',template:/*ion-inline-start:"F:\ionic-app\src\pages\policy\policy.html"*/'<ion-header no-border>\n    <ion-toolbar color="blue" hideBackButton="true">\n      <button ion-button color="white"  start (click)="popPage()">\n          <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n      \n      <ion-title text-center>Company Policy</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button >\n          <ion-icon name="notifications"></ion-icon> \n        </button> \n      </ion-buttons>\n      \n  </ion-toolbar>\n  \n  </ion-header>\n<ion-content padding class="justified">\n    <h3 class="text-center" >Handbook</h3>\n  \n \n   <h3 class="text-center">Employee Policy Handbook</h3>\n   <h6 class="text-center">Effective Date: Effective as of Jan 1st, 2019.</h6>\n   <h5>Purpose of this Handbook</h5>\n   <p>The purpose of an employee handbook is to orient new and existing employees with the company. This is a culture handbook for our/your company and we expect our team to build a fantastic entrepreneurial culture to succeed in the future. It is a resource that provides answers for the most frequently asked employee questions.\n       Besides informing new employees about company policy, a good handbook emphasizes the at-will nature of the employment and the company’s disciplinary and termination rights. Most importantly, it is a declaration of the employer’s rights and expectations.\n       This handbook supersedes and replaces any and all personnel policies and manuals previously distributed, made available or applicable to employees.</p>\n \n <h5>Employee Goals</h5>\n     <ul>\n       <li>Employees at all levels are working toward the organization’s goals and priorities.</li>\n       <li>Performance expectations are set and clearly communicated in a systematic manner.</li>\n       <li>Performance is evaluated fairly and consistently.</li>\n       <li>Employees are held accountable for results.</li>\n       <li>Development needs are assessed and addressed.</li>\n       <li>Accomplishments are recognized and rewarded.</li>\n     </ul>\n \n   <h5>Idea Elan Goals</h5>\n     <ul>\n       <li>Idea Elan has a growing customer base in 10 countries such as US, Canada, Spain, Germany, Norway, Switzerland, India, Saudi Arabia, Netherlands, and Austria. We plan to expand to more than 5 new countries within 1 year.</li>\n       <li>Idea Elan should be a leader and pioneer in new technologies to help scientific community worldwide.</li>\n       <li>Idea Elan should double its existing customer base within 1 year (before the end of 2018).</li>\n       <li>Idea Elan should win at least 5 proposal based Institution wide orders in the year 2018.</li>\n     </ul>\n \n   <h5>Core Principles:</h5>\n     <ul>\n       <li>Innovation and Out of Box thinking by all employees at all the roles.</li>\n       <li>Responsibility.</li>\n       <li>Customer focused and not employee or employer focused.</li>\n       <li>Frugality.</li>\n       <li>Zero Communication gap.</li>\n     </ul>\n   <h5>Performance Plan Goals</h5>\n   <ul>\n     <li>Establish critical elements and performance standards which will permit the accurate evaluation of job performance on the basis of objective criteria.</li>\n     <li>Use performance plans to communicate goals and objectives and identify accountability for their accomplishment.</li>\n     <li>Use appraisal results as a basis for paying, rewarding, promoting, training, reassigning, and retaining, and for improving or removing employees who are performing unacceptably.</li>\n   </ul>\n \n   <h5>Appraisal Plan</h5>\n   <ul>\n     <li>The Current Industry standard for Software developers, Software Managers and QA / Support Specialists is 8-12% hike in the salary.</li>\n     <li>For a fresher the 1st hike will be 50-70% of the base salary, the 2nd hike will be 25-35%. Base salary will differ for Software developers, QA and Support Specialists.</li>\n     <li> We plan to beat the market and have our hike range from 10 – 16%. Hike applicable for personnel with 3-5 years’ experience.</li>\n     <li>Hike applicable for personnel with over 5 years’ experience is 8-12%.</li>\n     <li>The hike percentage is based on performance evaluation. Employee performance will be evaluated by respective managers and classified as\n       <ul>\n         <li>Satisfactory</li>\n         <li>Good</li>\n         <li>Excellent</li>\n         <li>Outstanding</li>\n       </ul>\n     </li>\n   </ul>\n \n   <h5>Bonus Plan</h5>\n   <p>\n     Every employee will receive a complete bonus every year. The bonus package is based on performance evaluation \n     that will be done twice every year. The first appraisal will be done in August and the 2nd appraisal will \n     be done towards the end of December. 50% of the bonus will be paid on November 1st based on 1st appraisal \n     and the remaining 50% will be paid on April 1st based on the 2nd appraisal. Performance will be graded as \n     Satisfactory, Good, and Excellent (anything below Satisfactory would mean that you will be getting a firing\n     order soon). The decision to qualify your performance will be done exclusively by respective managers.\n     <br/><br/>\n     Satisfactory: This means that the person is capable of doing things according to the DNA of Idea Elan however, \n     lacks sufficient motivation and enthusiasm to perform better.\n     <br/><br/>\n     Good: Everything that is applicable to Satisfactory, moreover you also are independent and have enough motivation, \n     dedication and enthusiasm to perform well.\n     <br/><br/>\n     Excellent: Everything that is applicable to Good, moreover you also perform extremely well under stressful situations\n     and during deadlines to help company move in a positive direction. You also exhibit an innate team spirit and\n     leadership quality to uplift your fellow team members to get to the next league.\n     <br/><br/>\n     Out-standing: Everything that is applicable to Excellent, moreover you have far exceeded your expectations from \n     your managers and the CEO. You are most likely going to get a promotion to the next level within 3-6 months.\n     <br/><br/>\n     Employees completing 5 years will be provided Vesting.\n   </p>\n    <ion-grid class="rowHeading">\n       <ion-row>\n         <ion-col col-3><span class="rowHeading">Years Completed</span></ion-col>\n         <ion-col col-2><span class="rowHeading">Satisfactory</span></ion-col>\n         <ion-col col-2><span class="rowHeading">Good </span></ion-col>\n         <ion-col col-2> <span class="rowHeading">Excellent </span></ion-col>\n         <ion-col col-3> <span class="rowHeading">Outstanding </span></ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col col-3>Year 1</ion-col>\n         <ion-col col-2>1%</ion-col>\n         <ion-col col-2>2%</ion-col>\n         <ion-col col-2 >3%</ion-col>\n         <ion-col col-3>5%</ion-col>\n       </ion-row>\n       <ion-row >\n         <ion-col col-3>Year 2</ion-col>\n         <ion-col col-2>2%</ion-col>\n         <ion-col col-2>5%</ion-col>\n         <ion-col col-2>6%</ion-col>\n         <ion-col col-3>10%</ion-col>\n       </ion-row>\n         <ion-row>\n           <ion-col col-3>Year 3</ion-col>\n           <ion-col col-2>5%</ion-col>\n           <ion-col col-2>10%</ion-col>\n           <ion-col col-2>12%</ion-col>\n           <ion-col col-3>15%</ion-col>\n         </ion-row>\n         <ion-row>\n           <ion-col col-3>Year 4</ion-col>\n           <ion-col col-2>10%</ion-col>\n           <ion-col col-2>15%</ion-col>\n           <ion-col col-2>20%</ion-col>\n           <ion-col col-3>25%</ion-col>\n         </ion-row>\n         <ion-row>\n           <ion-col col-3>Year 5 and above</ion-col>\n           <ion-col col-2>5%</ion-col>\n           <ion-col col-2>7%</ion-col>\n           <ion-col col-2>10%</ion-col>\n           <ion-col col-3>12%</ion-col>\n           </ion-row>\n     </ion-grid>\n     <p>Example: If an Employee receives “Good” in Year 1 in the first appraisal in August and “Excellent” in the 2nd appraisal in Dec then on Nov 1st he/she will get 2% of the salary as bonus and on April 1st will receive 4% of the salary as bonus.</p>\n \n     <h5>Employee Referral Bonus</h5>\n     <p>This benefit aims to provide an attractive scheme of incentives to reward and acknowledge employees for taking part in the company’s efforts to hire quality manpower by referring suitable candidates for existing job openings. The reward amount varies as per the mode of employment of the referred candidate. The referral amount will be given once the hired candidate completes their probation period.</p>\n \n      <ion-grid>\n       <ion-row>\n          <ion-col>Experience(years)</ion-col>\n          <ion-col>Referral Amount</ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col>Fresher / Support Team</ion-col>\n         <ion-col>10000 INR</ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col>1-3 Years</ion-col>\n         <ion-col>30000 INR</ion-col>\n       </ion-row>\n       <ion-row>\n         <ion-col>Above 3 years</ion-col>\n         <ion-col>40000 INR</ion-col>\n       </ion-row>\n     </ion-grid> \n      \n      <h5>Idea Elan Retreat:</h5>\n      <p>\n         Idea Elan will have a retreat every 1.5 -2 years in a new location for 3-5 days depending on the situation. \n         The location and activities for the retreat will be decided by the team as a whole. The retreat time and location \n         will be announced at least 1 month before the event. Idea Elan will cover all your expenses during this trip.\n     </p>\n \n      <h5>Equal Opportunity Employment:</h5>\n      <p>\n         This company is an equal opportunity employer and does not unlawfully discriminate against employees or applicants \n         for employment on the basis of an individual’s race, colour, religion, creed, sex, national origin, age, disability,\n          marital status or any other status protected by applicable law. This policy applies to all terms, conditions and \n          privileges of employment, including recruitment, hiring, placement, compensation, promotion, discipline and \n          termination.\n         <br/> \n         Whenever possible, the company makes reasonable accommodations for qualified individuals with disabilities to\n         the extent required by law.\n      </p>\n      \n      <h5>Non-Harassment Policy / Non-Discrimination Policy</h5>\n       <p>\n           This company prohibits discrimination or harassment based on race, color, religion, creed, sex, national origin, \n           age, disability, marital status, veteran status or any other status protected by applicable law. Each individual \n           has the right to work in a professional atmosphere that promotes equal employment opportunities and is free from \n           discriminatory practices, including without limitation harassment. Consistent with its workplace policy of equal \n           employment opportunity, the company prohibits and will not tolerate harassment on the basis of race, color, \n           religion, creed, sex, national origin, age, disability, marital status, veteran status or any other status \n           protected by applicable law. Violations of this policy will not be tolerated. Discrimination includes, but is not\n           limited to: making any employment decision or employment related action on the basis of race, colour, religion, \n           creed, age, sex, disability, national origin, marital or veteran status, or any other status protected by \n           applicable law.\n           <br/><br/>\n           Harassment is generally defined as unwelcome verbal or non-verbal conduct, based upon a person’s protected \n           characteristic, that denigrates or shows hostility or aversion toward the person because of the characteristic, \n           and which affects the person’s employment opportunities or benefits, has the purpose or effect of unreasonably \n           interfering with the person’s work performance, or has the purpose or effect of creating an intimidating, hostile \n           or offensive working environment. Harassing conduct includes, but is not limited to: epithets; slurs or negative\n           stereotyping; threatening, intimidating or hostile acts; denigrating jokes and display or circulation in the \n           workplace of written or graphic material that denigrates or shows hostility or aversion toward an individual or group based on their protected characteristic.\n           <br/><br/>\n           Sexual harassment is defined as unwelcome sexual advances, requests for sexual favors and other verbal, visual \n           or physical conduct of a sexual nature, when:\n           <br/><br/>\n           1. Submission to such conduct is made either explicitly or implicitly a term or condition of an individual’s\n           employment;\n           <br/><br/>\n           2. Submission to or rejection of such conduct by an individual is used as the basis for employment decisions\n            affecting such individual; or\n           <br/><br/>\n           3. Such conduct has the purpose or effect of unreasonably interfering with an individual’s work performance \n           or creating an intimidating, hostile or offensive working environment.\n           <br/><br/>\n           Examples of sexual harassment include: unwelcome or unsolicited sexual advances; displaying sexually suggestive material; unwelcome sexual\n           flirtations, advances or propositions; suggestive comments; verbal abuse of a sexual nature; sexually oriented jokes; crude or vulgar language\n           or gestures; graphic or verbal commentaries about an individual’s body; display or distribution of obscene materials; physical contact such \n           as patting, pinching or brushing against someone’s body; or physical assault of a sexual nature.\n       </p>\n  \n         <h5>Reporting</h5>\n         <p>\n             Any company employee who feels that he or she has been harassed or discriminated against, or has witnessed or\n             become aware of discrimination or harassment in violation of these policies, should bring the matter to the \n             immediate attention of his or her supervisor or [enter name of alternative person to whom employees can report]. \n             The company will promptly investigate all allegations of discrimination and harassment, and take action as \n             appropriate based on the outcome of the investigation. An investigation and its results will be treated as \n             confidential to the extent feasible, and the company will take appropriate action based on the outcome of the\n             investigation. No employee will be retaliated against for making a complaint in good faith regarding a \n             violation of these policies, or for participating in good faith in an investigation pursuant to these policies.\n             If an employee feels he/she has been retaliated against, the employee should file a complaint using the \n             procedures set forth above.\n         </p>\n \n         <h5>Open Door Policy</h5>\n         <p>\n             The company has an open door policy and takes employee concerns and problems seriously. The company values \n             each employee and strives to provide a positive work experience. Employees are encouraged to bring any workplace\n             concerns or problems they might have or know about to their supervisor or some other member of management.\n         </p>\n \n         <h5>Privacy</h5>\n         <p>\n             Employees and employers share a relationship based on trust and mutual respect. However, the company retains \n             the right to access all company property including computers, desks, file cabinets, storage facilities, and \n             files and folders, electronic or otherwise, at any time. Employees should not entertain any expectations of \n             privacy when on company grounds or while using company property.\n             <br/><br/>\n             All documents, files, voice-mails and electronic information, including e-mails and other communications, \n             created, received or maintained on or through company property are the property of the company, not the \n             employee. Therefore employees should have no expectation of privacy over those files or documents.\n         </p>\n \n         <h5>Personnel Files</h5>\n         <p>\n             The company maintains a personnel file on each employee. These files are kept confidential to the extent \n             possible. Employees may review their personnel file upon request.\n             <br/><br/>\n             It is important that personnel files accurately reflect each employee’s personal information. \n             Employees are expected to inform the company of any change in name, address, home phone number, \n             and home address, and marital status, number of dependents or emergency contact information.\n         </p>\n  \n         <h5>Tardiness</h5>\n         <p>\n             Employees are expected to arrive on time and ready for work. An employee who arrives 15 minutes after \n             their scheduled arrival time is considered tardy. The company recognizes that situations arise which\n             hinder punctuality; regardless, excessive tardiness is prohibited, and may be subject to disciplinary action.\n         </p>\n \n         <h5>Leave Policy</h5>\n         <h6>Earned Leave</h6>\n         <p>\n             All regular, full -time employees at Idea Elan are eligible for earned leave. Earned leave is calculated on a \n             month on month basis for the calendar year (January-December). If you have joined during the middle of the year, \n             your earned leave will be pro-rated from the date you started employment through Dec 31st of that calendar year\n             <br/><br/>\n             Every month Earned Leave accrues at 8 hours per month (equivalent to 1.5 days per month per calendar year).\n             <br/><br/>\n             During the probation period of 3 months , you are not entitled to take Earned Leave You may avail your Earned \n             leaves only after completing your probation period, at which point you will have accrued 40 (8 hours X 3) \n             hours or 3 days.\n             <br/><br/>\n             Earned Leave is exclusive of official and weekly holidays. Hence if an employee takes leave during which time a\n             declared holiday or weekend occurs, then those particular date(s) will not be counted as your Earned Leave.\n             <br/><br/>\n             If the employee does not utilize the leave then he/she will be provided a cash equivalent compensation for \n             those days.\n             <br/><br/>\n             Earned leave can be encashed along with the bonus (March).\n         </p>\n \n         <h5>Comp Offs</h5>\n         <p>\n             Sometimes it is necessary to work extra time to meet the deadlines. We may require certain employees to put \n             extra effort \n             and time to meet the schedules.After the project work is done, this extra time spent by these individuals \n             may be given a compensatory-off on some \n             other day(s) and/or we will provide 50% of the salary for the comp off day.\n             <br/><br/>\n             Comp offs can be given only on the days with prior email approval from the reporting manager. Leaves without \n             approval cannot be considered as comp offs.\n             <br/><br/>\n             Note: Minimum of 7 hours on a holiday will be considered as one compensatory off & a minimum of 4 hours on \n             a holiday or overtime as a half - day compensatory off.\n             <br/><br/>\n             For Example: If an employee works for 2 Saturdays in a month then they will be given 1 day extra salary and\n              may also receive 2 extra comp days at a later date based on deadlines and approvals from managers.\n         </p>\n \n         <h5>Accumulation/ Carry forward</h5>\n         <p>\n             You are urged to use your Earned Leave time in the year it has accrued.\n             <br/><br/>  \n             However, if you are unable to use all of your accrued Earned Leave during a calendar year, you may elect to\n             carry forward any accrued but unused vacation time into the next calendar year, subject to the maximum accrual\n             level of 80 hours (2 weeks) .Hence you can accumulate/ carry forward your earned leaves up to a maximum of\n             10 days.\n         </p>\n \n         <h5>Holidays</h5>\n         <p>\n             Company will observe a list of holidays not exceeding 12 each year as per the Gazette Holiday Calendar. \n             The dates of the holidays shall be made available to the employees on the 1st of January every year. \n             There may be a list of Optional Holidays shared along with this list. If the fixed holidays fall on Sunday, \n             each employee will be eligible avail an optional holiday from optional holiday list based on their religious \n             sentiments/celebration with prior approval from HR and reporting manager.\n             <br/><br/> New Year’s Day\n             <br/><br/> Sankranti / Pongal (2 days)\n             <br/><br/>  Republic Day\n             <br/><br/> Good Friday\n             <br/><br/>May Day\n             <br/><br/>Holi\n             <br/><br/>Ugadi\n             <br/><br/>Ramzan (Id-Ul-Fitar)\n             <br/><br/>Independence Day\n             <br/><br/>Vinayaka Chavithi\n             <br/><br/>Gandhi Jayanthi\n             <br/><br/>Vijaya Dasami/ Dussehra (2 days)\n             <br/><br/>Deepavali\n             <br/><br/>Christmas\n         </p>\n        \n         <h5>Notice Period</h5>\n           <p>The notice period to leave the company if an employee decides to leave is 30 days.</p>\n \n         <h5>Health Insurance:</h5>\n           <p>Employee is eligible for health insurance once they complete 3 years in the company.</p>\n \n           <h5>Advance Pay, Transport and Sodexo passes</h5>\n             <ul>\n               <li>Advance Pay for employees due to emergency is an option for those who have completed 1 year with Idea Elan.</li>\n               <li>For employees who has completed 1 year of work with Idea Elan will be provided with INR 500/month as transport allowance.</li>\n               <li>For employees who has completed 1 year of work with Idea Elan will be provided with Sodexo passes for INR 1100/month.</li>\n               <li>For employees who has completed 5+ year of work with Idea Elan will be provided with Sodexo passes for INR 2200/month.</li>\n             </ul>\n           \n             <h5>Action Plan</h5>\n               <ul>\n                 <li>All the Employees are requested to arrive the office by 10.00 A.M every day. Any kinds of delay under exceptions need to be informed to the respective Team Leaders.</li>\n                 <li>All the Employees should communicate in a common Language i.e. in English in the office premises.</li>\n                 <li>Employees are requested to keep their cell phones in silent/vibrator mode and are requested not to attend any personal calls except for calls from Home or under emergencies.</li>\n                 <li>Browsing/Surfing other sites which are not work related would not be entertained during working hours. Any personal e-mails can be checked before login hours, during lunch break or after your logout hours.</li>\n                 <li>Team Leaders are requested to conduct a team huddle every Monday morning after logging in for about 15 to 30 minutes where in issues of the trainees related to project or any other issues within the campus would be discussed with the TL’s along with the HR.</li>\n                 <li>All the Employees are requested to inform their Reporting persons about their leave plans at least 7 working days in advance and get it approved from the manager or the HR.</li>\n                 <li>Any unplanned leaves taken by the Trainees have to be informed 1 hour before their login timings to their TL’s and get it approved. Any unplanned leaves which are not been informed to the TL will be considered as an Loss of pay(LOP).</li>\n               </ul>\n \n             <h5>Acknowledgement of Receipt for Employee Handbook</h5>\n             <p>\n                 I acknowledge that I have received a copy of the Employee Handbook. I understand that I am responsible for \n                 reading the information contained in the Handbook.\n                 <br/><br/>\n                 I understand that the handbook is intended to provide me with a general overview of the company’s policies \n                 and procedures.\n                 <br/><br/>\n                 I acknowledge that nothing in this handbook is to be interpreted as a contract, expressed or implied, \n                 or an inducement for employment, nor does it guarantee my employment for any period of time.\n                 <br/><br/>\n                 I understand and accept that my employment with the company is at-will. I have the right to resign at any \n                 time with 30 days’ notice period, just as the company may terminate my employment at any time with 30 days’\n                 notice.\n                 <br/><br/>\n                 I acknowledge that the company may revise, suspend, revoke, terminate, change or remove, prospectively or \n                 retroactively, any of the policies or procedures outlined in this handbook or elsewhere, in whole or in \n                 part, with or without notice at any time, at the company’s sole discretion.\n \n             </p>\n       </ion-content>\n '/*ion-inline-end:"F:\ionic-app\src\pages\policy\policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PolicyPage);
    return PolicyPage;
}());

//# sourceMappingURL=policy.js.map

/***/ })

});
//# sourceMappingURL=8.js.map