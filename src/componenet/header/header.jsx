export function Header() {
  return (
    <header className="bg-primary bg-gradient text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-left text-md-center mb-3">
            <img
              className="rounded-circle img-fluid"
              src="https://podspace.pod.ir/api/files/1LMKYX562GQNUBSZ"
              alt="Profile Photo"
            />
          </div>
          <div className="col-md-9">
            <h1>Mahdi Fallahi</h1>
            <h4>Web Developer</h4>
            <h5 className="border-top pt-3">
              When I was
              younger, programming and art were my interests, and today I try to
              integrate them in my work by working in the field of front end.
              Due to the teamwork spirit I have, I can play an effective role in
              advancing the team's goals{" "}
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
}
