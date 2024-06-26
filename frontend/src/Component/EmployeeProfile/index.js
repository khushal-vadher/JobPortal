import React from "react";
import { useEffect, useState,useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbarone from "../Navbar"
function Index() {
  var userId = JSON.parse(localStorage.getItem("user"));
  var userinfo=userId;
  userId = userId._id;
  console.log(userId);
  var set=JSON.parse(localStorage.getItem("skillset"))
console.log(set); 
const [job, setjob] = useState({
  g:[]
});

const nav =useNavigate()
function handleclick(id){
  // e.preventDefault();
    console.log(id);
  localStorage.setItem("id",id);
   nav("/jobdetails")
 
 }
  const [recommend, setRecommend] = useState({
  });
  const [appliedjob, setappliedjob] = useState({
    g:[]
  });
  const getAppliedJob=async()=>{
    await fetch("http://localhost:8000/appliedjob", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       userId
      }),
    }).then((response) => response.json())
    .then(async (responseData) => {
setappliedjob({g:responseData})})
  }
  const getrecommend=async()=>{
    var res =await fetch("http://localhost:5000/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       set
      }),
    }).then((response) => response.json())
    .then(async (responseData) => {
setRecommend(responseData)
    await fetch("http://localhost:8000/jobrecommend", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       responseData
      }),
    }).then((response) => response.json())
    .then((responseData) => 
    {
      setjob({g:responseData})
    })
     
    })
   

  }

 
  useEffect(() => {
    
     setTimeout( () => {
    getrecommend()
    
    getAppliedJob()
    
    })
    //  const u=JSON.stringify(y.loginuser);
  }, []);

console.log(job)
  console.log(recommend)
  console.log(appliedjob)
    // })
   

  return (
    <>
<Navbarone/>
<div class="tr-breadcrumb bg-image section-before">
    <div class="container">
      <div class="breadcrumb-info text-center">
        <div class="user-image">
          <img src="images/others/author.png" alt="Image" class="img-fluid"/>
        </div>
        <div class="user-title">
          <h1>{userinfo.name}</h1>
        </div>
        <ul class="job-meta tr-list list-inline">
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>India</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>xyz-xy-xyz-xy</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="#"><span class="__cf_email__"
                data-cfemail="dcb6b4b3b2b8b3b99cbbb1bdb5b0f2bfb3b1">{userinfo.email}</span></a></li>
          <li><i class="fa fa-briefcase" aria-hidden="true"></i>{userinfo.workstatus}</li>
        </ul>
        <ul class="breadcrumb-social social-icon-bg  tr-list">
          <li><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i> <span>Twitter</span> </a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i> <span>Google Plus</span> </a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i><span>Linkedin</span> </a></li>
          <li><a href="#"><i class="fa fa-dribbble"></i> <span>Dribbble</span></a></li>
          <li><a href="#"><i class="fa fa-behance"></i> <span>Behance</span></a></li>
          <li><a href="#"><i class="fa fa-globe"></i> <span>Website</span> </a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="tr-profile section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-3">
          <div class="tr-sidebar">
            <ul class="nav nav-tabs profile-tabs section" role="tablist">
              <li role="presentation"><a class="active" href="#account-info" aria-controls="account-info" role="tab"
                  data-toggle="tab"><i class="fa fa-life-ring" aria-hidden="true"></i> Account Info</a></li>
              <li role="presentation"><a href="#resume" aria-controls="resume" role="tab" data-toggle="tab"><span><i
                      class="fa fa-user-o" aria-hidden="true"></i></span> My Resume</a></li>
              <li role="presentation"><NavLink to="/requirement" aria-controls="edit-resume" role="tab"
                  data-toggle="tab"><span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>Prerequisite abilities</NavLink></li>
              
              <li role="presentation"><a href="#archived" aria-controls="archived" role="tab" data-toggle="tab"><span><i
                      class="fa fa-clone" aria-hidden="true"></i></span> Archived Apply Job</a></li>
              
            </ul>
           
          </div>
        </div>
        <div class="col-md-8 col-lg-9">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in show active account-info" id="account-info">
              <div class="tr-fun-fact">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="fun-fact">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact4.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">329</h1>
                        <span>Viewed my resume</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="fun-fact">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact5.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">32</h1>
                        <span>Application submit</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="fun-fact">
                      <div class="fun-fact-icon">
                        <img src="images/icons/fun-fact6.png" alt="images" class="img-fluid"/>
                      </div>
                      <div class="media-body">
                        <h1 class="counter">27</h1>
                        <span>Call for interview</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section display-information">
                <div class="title title-after">
                  <div class="icon"><img src="images/icons/2.png" alt="Icon" class="img-fluid"/></div>
                  <span>Your display Information</span>
                </div>
                <div class="change-photo">
                  <div class="user-image">
                    <img src="images/others/author.png" alt="Image" class="img-fluid"/>
                  </div>
                  
                </div>
                <ul class="tr-list account-details">
                  
                  <li>Display Name<span>{userinfo.name}</span></li>
                
                  <li>Email Id<span><a href="#"><span class="__cf_email__"
                          data-cfemail="2e444641404a414b6e49434f4742004d4143">{userinfo.email}</span></a></span>
                  </li>
                  <li>Profession<span>{userinfo.workstatus}</span></li>
                </ul>
              </div>
              
            </div>
            <div role="tabpanel" class="tab-pane section" id="resume">
              <ul class="tr-list resume-info">
                <li class="career-objective media">
                  <div class="icon">
                    <i class="fa fa-black-tie" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Career Objective</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni।</p>
                  </div>
                </li>
                <li class="work-history media">
                  <div class="icon">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Work History</span>
                    <ul class="tr-list">
                      <li>
                        <span>Senior Graphic Designer @ Buildomo</span>
                        <span class="present">2016 - Present</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li>
                        <span>Former Graphic Designer @ Ideame</span>
                        <span class="present">2015 - 2016</span>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li>
                        <span>Head of Design @ Titan Compnay</span>
                        <span class="present">2007 - 2015</span>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                      </li>
                      <li>
                        <span>Graphic Designer @ Precision</span>
                        <span class="present">2005 - 2007</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li>
                        <span>Graphic Designer (Intern) @ Costa Rica Fruit Compnay</span>
                        <span class="present">2003 - 2005</span>
                        <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="education-background media">
                  <div class="icon">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Education Background</span>
                    <ul class="tr-list">
                      <li>
                        <span>Senior Graphic Designer @ Buildomo</span>
                        <ul class="tr-list">
                          <li>Year: 1999 - 2001</li>
                          <li>Major: Major in Accounting</li>
                          <li>Course Duration: 2 Years</li>
                          <li>Result: 4.00</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li>
                        <span>Bachalor of Arts @ Universty of Bristol</span>
                        <ul class="tr-list">
                          <li>Year: 1999 - 2001</li>
                          <li>Major: Major in Accounting</li>
                          <li>Course Duration: 2 Years</li>
                          <li>Result: 4.00</li>
                        </ul>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li>
                        <span>Diploma in Graphics Design @ Cincinnati Christian University</span>
                        <ul class="tr-list">
                          <li>Year: 1999 - 2001</li>
                          <li>Major: Major in Accounting</li>
                          <li>Course Duration: 2 Years</li>
                          <li>Result: 4.00</li>
                        </ul>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="qualification media">
                  <div class="icon">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Special Qualification:</span>
                    <ol>
                      <li>5 years+ experience designing and building products In the Design & IT industry.</li>
                      <li>Passion for people-centered design, solid intuition.</li>
                      <li>Skilled at any Kind Design Tools. </li>
                      <li>Hard Worker & Quick Lerner.</li>
                    </ol>
                  </div>
                </li>
                <li class="language-proficiency media">
                  <div class="icon">
                    <i class="fa fa-language" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Language Proficiency:</span>
                    <ul class="tr-list">
                      <li>
                        <span>English</span>
                        <ul class="tr-list rating">
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                      </li>
                      <li>
                        <span>German</span>
                        <ul class="tr-list rating">
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                      </li>
                      <li>
                        <span>Spanish</span>
                        <ul class="tr-list rating">
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                        </ul>
                      </li>
                      <li>
                        <span>Latin</span>
                        <ul class="tr-list rating">
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                          <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="personal-deatils media">
                  <div class="icon">
                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Personal Deatils</span>
                    <ul class="tr-list">
                      <li><span class="left">Full Name</span><span class="middle">:</span> <span class="right">Jhon
                          Doe</span></li>
                      <li><span class="left">Father's Name </span><span class="middle">:</span> <span
                          class="right">Robert Doe</span></li>
                      <li><span class="left">Mother's Name</span><span class="middle">:</span> <span
                          class="right">Ismatic Roderos Doe</span></li>
                      <li><span class="left">Date of Birth</span><span class="middle">:</span> <span
                          class="right">26/01/1982</span></li>
                      <li><span class="left">Birth Place</span><span class="middle">:</span> <span class="right">United
                          State of America</span></li>
                      <li><span class="left">Nationality</span><span class="middle">:</span> <span
                          class="right">Canadian</span></li>
                      <li><span class="left">Sex</span><span class="middle">:</span> <span class="right">Male</span>
                      </li>
                      <li><span class="left">Address</span><span class="middle">:</span> <span class="right">121 King
                          Street, Melbourne Victoria, 1200 USA</span></li>
                    </ul>
                  </div>
                </li>
                <li class="personal-deatils media">
                  <div class="icon">
                    <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Declaration</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt. </p>
                  </div>
                </li>
              </ul>
              <div class="buttons pull-right">
                <a href="#" class="btn button-cancle">Cancle</a>
                <a href="#" class="btn btn-primary">Update Your Resume</a>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane edit-resume section" id="edit-resume">
              <ul class="tr-list resume-info">
                <li class="career-objective">
                  <div class="icon">
                    <i class="fa fa-black-tie" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Career Objective</span>
                    <div class="code-edit">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni।</p>
                    </div>
                  </div>
                </li>
                <li class="work-history">
                  <div class="icon">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>
                  <div class="media-body additem-work">
                    <span class="tr-title">Work History</span>
                    <div id="addhistory" class="additem">
                      <span id="clone" class="icon clone"><i class="fa fa-plus" aria-hidden="true"></i></span>
                      <span class="icon remove"><i class="fa fa-times" aria-hidden="true"></i></span>
                      <div class="code-edit-small">
                        <label>Job Title</label>
                        <div class="code-edit"><span>Senior Graphic Designer</span></div>
                        <label>Compnay Name</label>
                        <div class="code-edit"><span>Buildomo LLC</span></div>
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <label>From</label>
                            <div class="calendar">
                              <input type="date" class="form-control" value="2015-01-15" />
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <label>To</label>
                            <div class="calendar">
                              <input type="date" class="form-control" value="2016-01-13"/>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="checkbox">
                              <label for="logged-1"><input type="checkbox" name="logged-1" id="logged-1"/>I currently
                                work here</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="education-background">
                  <div class="icon">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                  </div>
                  <div class="media-body additem-edu">
                    <span class="tr-title">Education Background</span>
                    <div id="add-edu" class="additem">
                      <span id="edu-clone" class="icon clone"><i class="fa fa-plus" aria-hidden="true"></i></span>
                      <span class="icon remove"><i class="fa fa-times" aria-hidden="true"></i></span>
                      <div class="code-edit-small">
                        <label>Degree</label>
                        <div class="code-edit"><span>Diploma in Graphic Designer</span></div>
                        <label>Institute Name</label>
                        <div class="code-edit"><span>Cincinnati Christian University</span></div>
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <label>From Year</label>
                            <div class="calendar">
                              <input type="date" class="form-control" value="2012-01-01"/>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <label>To Year (or expected)</label>
                            <div class="calendar">
                              <input type="date" class="form-control" value="2017-01-13"/>
                            </div>
                          </div>
                          <div class="col-sm-6 col-md-4">
                            <label>Result (GPA)</label>
                            <div class="code-edit"><span>4.00/5.00</span></div>
                          </div>
                        </div>
                      </div>
                      <div class="code-edit">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="qualification">
                  <div class="icon">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Special Qualification:</span>
                    <div class="code-edit">
                      <ol>
                        <li>5 years+ experience designing and building products In the Design &amp; IT industry.</li>
                        <li>Passion for people-centered design, solid intuition.</li>
                        <li>Skilled at any Kind Design Tools. </li>
                        <li>Hard Worker &amp; Quick Lerner.</li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li class="language-proficiency code-edit-small">
                  <div class="icon">
                    <i class="fa fa-language" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Language Proficiency:</span>
                    <div class="rating-star">
                      <span class="pull-left code-edit">English</span>
                      <div class="rating">
                        <input type="radio" id="star1" name="rating" /><label class="full" for="star1"></label>
                        <input type="radio" id="star2" name="rating" /><label class="half" for="star2"></label>
                        <input type="radio" id="star3" name="rating" /><label class="full" for="star3"></label>
                        <input type="radio" id="star4" name="rating" /><label class="half" for="star4"></label>
                        <input type="radio" id="star5" name="rating" /><label class="full" for="star5"></label>
                        <input type="radio" id="star6" name="rating" /><label class="half" for="star6"></label>
                        <input type="radio" id="star7" name="rating" /><label class="full" for="star7"></label>
                        <input type="radio" id="star8" name="rating" /><label class="half" for="star8"></label>
                        <input type="radio" id="star9" name="rating" /><label class="full" for="star9"></label>
                        <input type="radio" id="star10" name="rating" /><label class="half" for="star10"></label>
                      </div>
                    </div>
                    <div class="rating-star">
                      <span class="pull-left code-edit">German</span>
                      <div class="rating">
                        <input type="radio" id="star11" name="rating1" /><label class="full" for="star11"></label>
                        <input type="radio" id="star12" name="rating1" /><label class="half" for="star12"></label>
                        <input type="radio" id="star13" name="rating1" /><label class="full" for="star13"></label>
                        <input type="radio" id="star14" name="rating1" /><label class="half" for="star14"></label>
                        <input type="radio" id="star15" name="rating1" /><label class="full" for="star15"></label>
                        <input type="radio" id="star16" name="rating1" /><label class="half" for="star16"></label>
                        <input type="radio" id="star17" name="rating1" /><label class="full" for="star17"></label>
                        <input type="radio" id="star18" name="rating1" /><label class="half" for="star18"></label>
                        <input type="radio" id="star19" name="rating1" /><label class="full" for="star19"></label>
                        <input type="radio" id="star20" name="rating1" /><label class="half" for="star20"></label>
                      </div>
                    </div>
                    <div class="rating-star">
                      <span class="pull-left code-edit">Spanish</span>
                      <div class="rating">
                        <input type="radio" id="star21" name="rating2" /><label class="full" for="star21"></label>
                        <input type="radio" id="star22" name="rating2" /><label class="half" for="star22"></label>
                        <input type="radio" id="star23" name="rating2" /><label class="full" for="star23"></label>
                        <input type="radio" id="star24" name="rating2" /><label class="half" for="star24"></label>
                        <input type="radio" id="star25" name="rating2" /><label class="full" for="star25"></label>
                        <input type="radio" id="star26" name="rating2" /><label class="half" for="star26"></label>
                        <input type="radio" id="star27" name="rating2" /><label class="full" for="star27"></label>
                        <input type="radio" id="star28" name="rating2" /><label class="half" for="star28"></label>
                        <input type="radio" id="star29" name="rating2" /><label class="full" for="star29"></label>
                        <input type="radio" id="star30" name="rating2" /><label class="half" for="star30"></label>
                      </div>
                    </div>
                    <div class="rating-star">
                      <span class="pull-left code-edit">Latin</span>
                      <div class="rating">
                        <input type="radio" id="star31" name="rating3" /><label class="full" for="star31"></label>
                        <input type="radio" id="star32" name="rating3" /><label class="half" for="star32"></label>
                        <input type="radio" id="star33" name="rating3" /><label class="full" for="star33"></label>
                        <input type="radio" id="star34" name="rating3" /><label class="half" for="star34"></label>
                        <input type="radio" id="star35" name="rating3" /><label class="full" for="star35"></label>
                        <input type="radio" id="star36" name="rating3" /><label class="half" for="star36"></label>
                        <input type="radio" id="star37" name="rating3" /><label class="full" for="star37"></label>
                        <input type="radio" id="star38" name="rating3" /><label class="half" for="star38"></label>
                        <input type="radio" id="star39" name="rating3" /><label class="full" for="star39"></label>
                        <input type="radio" id="star40" name="rating3" /><label class="half" for="star40"></label>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="personal-deatils code-edit-small">
                  <div class="icon">
                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Personal Deatils</span>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Full Name<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">Jhon Doe</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Father's Name<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">Robert Doe</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Date of Birth<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <div class="calendar">
                          <input type="date" class="form-control" value="1982-01-26"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Birth Place<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">United State of America</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Nationality<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">Canadian</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Sex<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">Male</span>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <label>Address<span class="pull-right">:</span> </label>
                      </div>
                      <div class="col-sm-8">
                        <span class="code-edit">121 King Street, Melbourne Victoria, 1200 USA</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="personal-deatils">
                  <div class="icon">
                    <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
                  </div>
                  <div class="media-body">
                    <span class="tr-title">Declaration</span>
                    <div class="code-edit">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <br/>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni। dolores eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="buttons pull-right">
                <a href="#" class="btn button-cancle">Cancle</a>
                <a href="#" class="btn btn-primary">Update Your Resume</a>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane bookmark" id="bookmark">
              <div class="row">
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Full Time</a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Dig File</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/1.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Dig File</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span>Full Time</span></a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="job-details.html" class="btn btn-primary">Part Time</a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Loop</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/2.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Loop</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="part-time">Part Time</span></a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Freelance</a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Humanity Creative</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/3.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Humanity Creative</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="freelance">Freelance</span></a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Full Time</a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Families</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/4.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Families</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span>Full Time</span></a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Part Time</a>
                        <span class="tr-title">
                          <a href="job-details.html">Project Manager</a>
                          <span><a href="#">Sky Creative</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/5.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Project Manager</a>
                        <span><a href="#">Sky Creative</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="part-time">Part Time</span></a>
                        <span class="pull-right">Posted 1 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Freelance</a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Associate</a>
                          <span><a href="#">Pencil</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/6.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Associate</a>
                        <span><a href="#">Pencil</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="freelance">Freelance</span></a>
                        <span class="pull-right">Posted 23 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#" class="btn btn-primary">Full Time</a>
                        <span class="tr-title">
                          <a href="job-details.html">Graphic Designer</a>
                          <span><a href="#">Fox</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/7.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Graphic Designer</a>
                        <span><a href="#">Fox</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span>Full Time</span></a>
                        <span class="pull-right">Posted Oct 09, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 remove-item">
                  <div class="job-item">
                    <span class="remove-icon"><i class="fa fa-times" aria-hidden="true"></i></span>
                    <div class="item-overlay">
                      <div class="job-info">
                        <a href="#"><span class="btn btn-primary">Part Time</span></a>
                        <span class="tr-title">
                          <a href="job-details.html">Design Consultant</a>
                          <span><a href="#">Owl</a></span>
                        </span>
                        <ul class="tr-list job-meta">
                          <li><i class="fa fa-map-signs" aria-hidden="true"></i>San Francisco, CA, US</li>
                          <li><i class="fa fa-briefcase" aria-hidden="true"></i>Mid Level</li>
                          <li><i class="fa fa-money" aria-hidden="true"></i>$5,000 - $6,000</li>
                        </ul>
                        <ul class="job-social tr-list">
                          <li><a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-expand" aria-hidden="true"></i></a></li>
                          <li><a href="#"><i class="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                          <li><a href="job-details.html"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="job-info">
                      <div class="company-logo">
                        <img src="images/job/8.png" alt="images" class="img-fluid"/>
                      </div>
                      <span class="tr-title">
                        <a href="#">Design Consultant</a>
                        <span><a href="#">Owl</a></span>
                      </span>
                      <ul class="tr-list job-meta">
                        <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>San Francisco, CA, US</li>
                        <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>Mid Level</li>
                        <li><span><i class="fa fa-money" aria-hidden="true"></i></span>$5,000 - $6,000</li>
                      </ul>
                      <div class="time">
                        <a href="#"><span class="part-time">Part Time</span></a>
                        <span class="pull-right">Posted 10 day ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane apply-job" id="archived">
            {appliedjob.g.map((add,i)=>(

            
              <div key={i}class="job-item remove-item">
                <div class="job-info">
                  <div class="left-content">
                    <div class="clearfix">
                    <center>
                      <div class="company-logo">
                        <img src="images/others/company.png"style={{width:"40%"}} alt="images" class="img-fluid"/>
                      </div>
                      </center>
                      <span class="tr-title">
                        <a href="job-details.html">{add[0].title}</a><span><a href="#">{add[0].companyname}</a></span>
                      </span>
                      <span><a href="#" class="btn btn-primary">{add[0].jobtype}</a></span>
                    </div>
                    <ul class="tr-list job-meta">
                      <li><span><i class="fa fa-map-signs" aria-hidden="true"></i></span>{add[0].category}</li>
                      <li><span><i class="fa fa-briefcase" aria-hidden="true"></i></span>{add[0].exprience}</li>
                      <li><span><i class="fa fa-money" aria-hidden="true"></i></span>{add[0].salary}</li>
                    </ul>
                  </div>
                  <div class="right-content">
                    { add.status==="pending"?
                    <a style={{backgroundColor:"#ffffb2",textTransform:"uppercase"}}class="btn" >{add.status}</a>:<></>}
                    { add.status==="Accepted"?  <a style={{backgroundColor:"#a3e7a3",textTransform:"uppercase"}}class="btn">{add.status}</a>:<></>}
                    { add.status==="Rejected"?  <a style={{backgroundColor:"#f89696",textTransform:"uppercase"}}class="btn">{add.status}</a>:<></>}
                 
                  </div>
                </div>
              </div>
            ))
             }
            </div>
            <div role="tabpanel" class="tab-pane section close-account" id="close-account">
              <h1>Delete Your Account</h1>
              <span>Are you sure, you want to delete your account?</span>
              <div class="buttons">
                <a href="#" class="btn btn-primary">Delete Account</a>
                <a href="#" class="btn button-cancle">Cancle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    {recommend?  (<div style={{padding: '7%'}}>
    <div class="tr-job-posted similar-jobs">
              <span class="tr-title">Recommended Jobs Based on Skills</span>
              <div class="row">
              {job.g.map((add,i)=>(
              <div key={i}className="col-md-6 col-lg-3">
                <div className="job-item">
                  <div className="item-overlay">
                    <div className="job-info">
                      <a href="#" className="btn btn-primary">{add.jobtype}</a>
                      <span className="tr-title">
                        <a href="job-details.html">{add.title}</a>
                        <span><a href="#">{add.companyname}</a></span>
                      </span>
                      <ul className="tr-list job-meta">
                        <li><i className="fa fa-map-signs" aria-hidden="true"></i>{add.category} Developer</li>
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i>{add.exprience}</li>
                        <li><i className="fa fa-money" aria-hidden="true"></i>${add.salary}</li>
                      </ul>
                      <ul className="job-social tr-list">
                        <li><a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-expand" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a></li>
                        <li><a onClick={()=>{handleclick(add._id)}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-info">
                    <div className="company-logo"style={{width:"50%"}}>
                      <img src="images/others/company.png"  alt="images" className="img-fluid"/>
                    </div>
                    <span className="tr-title">
                      <a href="#">{add.title}</a>
                      <span><a href="#">{add.companyname}</a></span>
                    </span>
                    <ul className="tr-list job-meta">
                      <li><span><i className="fa fa-map-signs" aria-hidden="true"></i></span>{add.category} Developer</li>
                      <li><span><i className="fa fa-briefcase" aria-hidden="true"></i></span>{add.exprience}</li>
                      <li><span><i className="fa fa-money" aria-hidden="true"></i></span>${add.salary}</li>
                    </ul>
                    <div className="time">
                      <a href="#"><span
                         class="part-time">{add.jobtype}</span></a>
                      <span  style={{marginTop:"4%"}}className="pull-right">Posted on {add.postedDate.slice(0, 16)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div></div>):(<div></div>)}
 
  </div>

  
  <div class="tr-download-app bg-image section-padding section-before">
    <div class="container text-center">
      <h1>Download on App Store</h1>
      <div class="app-content">
        <div class="row">
          <div class="col-sm-4">
            <div class="download-app">
              <a href="#">
                <div class="download-image">
                  <img src="images/icons/app1.png" alt="Image" class="img-fluid"/>
                </div>
                <div class="download-info">
                  <span>available on</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="download-app">
              <a href="#">
                <div class="download-image">
                  <img src="images/icons/app2.png" alt="Image" class="img-fluid"/>
                </div>
                <div class="download-info">
                  <span>available on</span>
                  <strong>App Store</strong>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="download-app">
              <a href="#">
                <div class="download-image">
                  <img src="images/icons/app3.png" alt="Image" class="img-fluid"/>
                </div>
                <div class="download-info">
                  <span>available on</span>
                  <strong>Windows Store</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      <div class="footer">
        <div class="footer-top section-padding">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>About Us</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">About Seeker</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">International Partners</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Job Seekers</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Career Counseling</a>
                    </li>
                    <li>
                      <a href="#">My Bdjobs</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Video Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Employers</h3>
                  <ul class="tr-list">
                    <li>
                      <a href="#">Create Account</a>
                    </li>
                    <li>
                      <a href="#">Products/Service</a>
                    </li>
                    <li>
                      <a href="#">Post a Job</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="footer-widget">
                  <h3>Newsletter</h3>
                  <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                  <form class="contact-form" method="post" action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        required="required"
                        placeholder="Your email Id"
                      />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="copyright">
              <p>
                Copyright © 2017 <a href="#">Seeker.com.</a> All rights
                reserved.
              </p>
            </div>
            <div class="footer-social pull-right">
              <ul class="tr-list">
                <li>
                  <a href="#" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Google Plus">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
