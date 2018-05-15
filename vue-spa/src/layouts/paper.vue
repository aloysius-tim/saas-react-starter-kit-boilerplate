<template>
  <div class="wrapper">
    <div class="sidebar" data-background-color="white" data-active-color="danger">
      <!--
        Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
        Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="http://www.creative-tim.com" class="simple-text">
          Creative Tim
          </a>
        </div>
        <ul class="nav">
          <li class="active">
            <a href="dashboard.html">
              <i class="ti-panel"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="user.html">
              <i class="ti-user"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="table.html">
              <i class="ti-view-list-alt"></i>
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a href="typography.html">
              <i class="ti-text"></i>
              <p>Typography</p>
            </a>
          </li>
          <li>
            <a href="icons.html">
              <i class="ti-pencil-alt2"></i>
              <p>Icons</p>
            </a>
          </li>
          <li>
            <a href="maps.html">
              <i class="ti-map"></i>
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a href="notifications.html">
              <i class="ti-bell"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li class="active-pro">
            <a href="upgrade.html">
              <i class="ti-export"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar bar1"></span>
            <span class="icon-bar bar2"></span>
            <span class="icon-bar bar3"></span>
            </button>
            <a class="navbar-brand" href="#">Dashboard</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="ti-panel"></i>
                  <p>Stats</p>
                </a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="ti-bell"></i>
                  <p class="notification">5</p>
                  <p>Notifications</p>
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="#">Notification 1</a></li>
                  <li><a href="#">Notification 2</a></li>
                  <li><a href="#">Notification 3</a></li>
                  <li><a href="#">Notification 4</a></li>
                  <li><a href="#">Another notification</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="ti-settings"></i>
                  <p>Settings</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-sm-6">
              <div class="card">
                <div class="content">
                  <div class="row">
                    <div class="col-xs-5">
                      <div class="icon-big icon-warning text-center">
                        <i class="ti-server"></i>
                      </div>
                    </div>
                    <div class="col-xs-7">
                      <div class="numbers">
                        <p>Capacity</p>
                        105GB
                      </div>
                    </div>
                  </div>
                  <div class="footer">
                    <hr />
                    <div class="stats">
                      <i class="ti-reload"></i> Updated now
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card">
                <div class="content">
                  <div class="row">
                    <div class="col-xs-5">
                      <div class="icon-big icon-success text-center">
                        <i class="ti-wallet"></i>
                      </div>
                    </div>
                    <div class="col-xs-7">
                      <div class="numbers">
                        <p>Revenue</p>
                        $1,345
                      </div>
                    </div>
                  </div>
                  <div class="footer">
                    <hr />
                    <div class="stats">
                      <i class="ti-calendar"></i> Last day
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card">
                <div class="content">
                  <div class="row">
                    <div class="col-xs-5">
                      <div class="icon-big icon-danger text-center">
                        <i class="ti-pulse"></i>
                      </div>
                    </div>
                    <div class="col-xs-7">
                      <div class="numbers">
                        <p>Errors</p>
                        23
                      </div>
                    </div>
                  </div>
                  <div class="footer">
                    <hr />
                    <div class="stats">
                      <i class="ti-timer"></i> In the last hour
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card">
                <div class="content">
                  <div class="row">
                    <div class="col-xs-5">
                      <div class="icon-big icon-info text-center">
                        <i class="ti-twitter-alt"></i>
                      </div>
                    </div>
                    <div class="col-xs-7">
                      <div class="numbers">
                        <p>Followers</p>
                        +45
                      </div>
                    </div>
                  </div>
                  <div class="footer">
                    <hr />
                    <div class="stats">
                      <i class="ti-reload"></i> Updated now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="header">
                  <h4 class="title">Users Behavior</h4>
                  <p class="category">24 Hours performance</p>
                </div>
                <div class="content">
                  <div id="chartHours" class="ct-chart"></div>
                  <div class="footer">
                    <div class="chart-legend">
                      <i class="fa fa-circle text-info"></i> Open
                      <i class="fa fa-circle text-danger"></i> Click
                      <i class="fa fa-circle text-warning"></i> Click Second Time
                    </div>
                    <hr>
                    <div class="stats">
                      <i class="ti-reload"></i> Updated 3 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="header">
                  <h4 class="title">Email Statistics</h4>
                  <p class="category">Last Campaign Performance</p>
                </div>
                <div class="content">
                  <div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>
                  <div class="footer">
                    <div class="chart-legend">
                      <i class="fa fa-circle text-info"></i> Open
                      <i class="fa fa-circle text-danger"></i> Bounce
                      <i class="fa fa-circle text-warning"></i> Unsubscribe
                    </div>
                    <hr>
                    <div class="stats">
                      <i class="ti-timer"></i> Campaign sent 2 days ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card ">
                <div class="header">
                  <h4 class="title">2015 Sales</h4>
                  <p class="category">All products including Taxes</p>
                </div>
                <div class="content">
                  <div id="chartActivity" class="ct-chart"></div>
                  <div class="footer">
                    <div class="chart-legend">
                      <i class="fa fa-circle text-info"></i> Tesla Model S
                      <i class="fa fa-circle text-warning"></i> BMW 5 Series
                    </div>
                    <hr>
                    <div class="stats">
                      <i class="ti-check"></i> Data information certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container-fluid">
          <nav class="pull-left">
            <ul>
              <li>
                <a href="http://www.creative-tim.com">
                Creative Tim
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                Blog
                </a>
              </li>
              <li>
                <a href="http://www.creative-tim.com/license">
                Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright pull-right">
            &copy; <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
