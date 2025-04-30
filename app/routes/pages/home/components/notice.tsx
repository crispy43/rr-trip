/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface Props {
  notices: string[];
}

const Notice = ({ notices }: Props) => {
  return (
    <aside className="notice container">
      <h2>📢 공지사항</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index} className="notice-title" onClick={() => alert(notice)}>
            <a href="#">{notice}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Notice;
