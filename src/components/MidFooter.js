const MidFooter = () => {
  const midFooterData = [
    {
      heading: "features",
      links: [
        ["Link Shortening", "#"],
        ["Branded Links", "#"],
        ["Analytics", "#"],
      ],
    },
    {
      heading: "resources",
      links: [
        ["Blog", "#"],
        ["Developers", "#"],
        ["Support", "#"],
      ],
    },
    {
      heading: "company",
      links: [
        ["About", "#"],
        ["Our Team", "#"],
        ["Careers", "#"],
        ["Contact", "#"],
      ],
    },
  ];

  return (
    <>
      {midFooterData.map((data) => (
        <div className="mid-footer-nav" key={data.heading}>
          <h4>{data.heading}</h4>
          <ul className={data.heading + "-data"}>
            {data.links.map((link) => (
              <li key={data.heading + link[0]}>
                <a href={link[1]}>{link[0]}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MidFooter;
