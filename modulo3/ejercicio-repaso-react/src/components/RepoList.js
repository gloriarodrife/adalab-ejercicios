import Repo from './Repo';

const RepoList = (props) => {
  const result = props.listData.map((item) => (
    <li key={item.id}>
      <Repo repo={item} deleteRepo={props.deleteRepo} />
    </li>
  ));

  return <ul>{result}</ul>;
};

export default RepoList;
