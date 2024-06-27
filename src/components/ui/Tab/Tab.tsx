const Tab = (props) => {
  const { items } = props;
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li role="tab">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
