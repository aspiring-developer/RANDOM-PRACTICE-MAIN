const Footer = () => {
  //Current year printing custom script
  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="text-center bg-dark text-white py-5 px-3">
          <p> <small className="currentYearDisplayField">&copy;{currentYear} &bull;</small>  React Knowledge Test App &bull; Raleigh &bull; NC &bull; 919-123-4567 </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;