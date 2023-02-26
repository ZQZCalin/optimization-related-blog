import { parseAuthors } from '../utils';

const BibTeXList = ({ data }) => (
  <ul className="biblist">
    {data.entries.map(({key, fields}) => (
      <li className="bibitem" key={key}>
        {parseAuthors(fields.author)}. {fields.title}. 
        {fields.booktitle !== "" && `In ${<i>fields.booktitle</i>}, `}{fields.year}.
        {/* to do: add reference link. */}
      </li>
    ))}
  </ul>
);

export default BibTeXList;