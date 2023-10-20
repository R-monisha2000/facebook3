import React from "react";
import { Link } from "react-router-dom";
// import Feeds from "../Images/feeds.png";

export const Groups = () => {
  return (
    <div className=" container-fluid">
      <div className=" row justify-content-evenly">
        <div className="col-12 col-lg-3 ">
          <div
            className=" d-none bg-white d-lg-block h-100 fixed-top overflow-hidden scrollbar "
            style={{ maxWidth: "360px", width: "100%", zIndex: "4" }}
          >
            <ul
              className=" navbar-nav mt-4 ms-3 d-flex flex-column pb-5 mb-5 "
              style={{ paddingTop: "56px" }}
            >
              {/* top */}

              <li className=" dropdown-item p-1 rounded">
                <div className=" d-flex justify-content-between align-items-center">
                  <div className=" p-2">
                    <h4>Groups</h4>
                  </div>

                  <div>
                    <i class="fa-solid fa-gear  text-muted fs-4"></i>
                  </div>
                </div>
              </li>

              <span className="input-group-prepend d-none d-lg-block">
                <div
                  className="input-group-text bg-gray border-0 rounded-pill"
                  style={{ minHeight: "40px", minWidth: "230px" }}
                >
                  <i
                    className="fas fa-search me-2 text-muted"
                    style={{ color: "#F0F2F5" }}
                  ></i>
                  <label
                    className="m-0 text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Search groups
                  </label>
                </div>
              </span>

              <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                  <div className=" p-2 d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-comments"></i>

                    <h5 className="m-0 p-1 ms-2 text-muted">Your feed</h5>
                  </div>

                  <div className=" d-flex  align-items-center">
                    <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                  </div>
                </Link>
              </li>

              <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                  <div className=" p-2 d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-cc-discover"></i>

                    <h5 className="m-0 p-1 ms-2 text-muted">Discover</h5>
                  </div>

                  <div className=" d-flex  align-items-center">
                    <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                  </div>
                </Link>
              </li>

              <li className=" dropdown-item p-1 rounded bg-gray-hover mt-2 ">
                <Link className=" text-decoration-none text-dark justify-content-between d-flex align-items-center">
                  <div className=" p-2 d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-users-rectangle"></i>
                    <h5 className="m-0 p-1 ms-2 text-muted">Your groups</h5>
                  </div>

                  <div className=" d-flex  align-items-center">
                    <i class="fa-solid fa-greater-than text-muted fs-6 me-1 "></i>
                  </div>
                </Link>
              </li>

              <br></br>
              <div
                className="bg-gray text-primary  fw-bold rounded p-2 text-center"
                type="button"
              >
                {" "}
                + New Group
              </div>
            </ul>
          </div>
        </div>
        <div className=" col-12 col-lg-8">
          <br />

          <div className="d-flex align-items-center justify-content-between">
            <h6 className=" text-muted my-5">Activity</h6>
            <div className=" d-flex  justify-content-evenly align-items-center">
              <p className=" mt-3 text-primary mx-1 align-items-center">
                See all
              </p>
            </div>
          </div>

          <div className="my-2">
            {/* card-1 */}
            <div className="d-flex">
              <img
                src=" https://www.pexels.com/photo/white-sports-coupe-733745/"
                className=" rounded-circle me-2 "
                style={{
                  width: "38px",
                  height: "38px",
                  objectFit: "cover",
                }}
                alt=""
              />
              <h6>Latest News</h6>

              <span className=" text-muted fs-7 mx-2 ">jun 18 at 7:00pm</span>
            </div>

            <ul
              className=" dropdown-menu border-0 shadow "
              aria-labelledby="post"
            >
              <li className=" d-flex align-items-center ">
                <a
                  href="#d "
                  className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                >
                  Edit
                </a>
              </li>
              <li className=" d-flex align-items-center ">
                <a
                  href="#d "
                  className=" dropdown-item d-flex align-items-center justify-content-around fs-7 "
                >
                  Delete post
                </a>
              </li>
            </ul>
          </div>
          <div className=" mt-3">
            <p>
              Good Things” is a short, motivational children's poem about
              working hard and doing your best. It contains alliteration and is
              from the children's poetry book, “Suzie Bitner Was Afraid of the
              Drain” by Barbara Vance. Poems from “Suzie Bitner” are used in
              curricula and classrooms around the world.
            </p>
            <div className=" mt-1 d-flex justify-content-between align-items-center ">
              <div>
                <div className=" d-flex align-items-center ">
                  <img
                    className="mx-1"
                    src="https://www.pexels.com/photo/white-sports-coupe-733745/"
                    alt=""
                    style={{
                      width: "28px",
                      height: "28px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="text-muted mx-2 mt-3">1290k</p>
                </div>
              </div>
              {/* seconf */}
              <div className=" d-flex align-items-center">
                <p className=" m-0 text-muted mx-1">157k</p>
                <i class="fa-solid fa-comment me-3"></i>
                <p className=" m-0 text-muted mx-1">735k</p>

                <i class="fa-solid fa-share"></i>
              </div>
            </div>
            <hr />
            <div className=" d-flex align-items-center justify-content-between">
              <div className=" ">
                <i class="fa-regular fa-thumbs-up fs-5 mx-2 text-muted"></i>
                Like
              </div>

              <div className=" align-items-center d-flex">
                <i class="fa-regular fa-comment fs-5 mx-2  text-muted"></i>
                Comments
              </div>

              <div className=" d-flex align-items-center ">
                <i class="fa-solid fa-share  fs-5 mx-2 text-muted"></i>
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
