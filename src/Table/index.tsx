import React, { FC } from 'react';
import styled from 'styled-components';
import { myTheme } from '../theme';

export type Column = {
  name: string;
  title: string;
};

const Cell = styled.div`
  box-sizing: border-box;
  padding: 0 12px 0 12px;
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableContainer = styled.div`
  background: #ffffff;
`;

const HeaderLine = styled.div`
  ${myTheme.fonts['SubTitle / SubTitle 3']};
  display: flex;
`;

const HeaderCell = styled(Cell)`
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #d8d8d8;
  &:hover {
    background: #e7e7e7;
    cursor: pointer;
  }
`;

const Filler = styled(HeaderCell)`
  flex: 1 1 auto;
`;
const RowLine = styled.div`
  ${myTheme.fonts['Body / 13 Small']};
  display: flex;
`;

const RowCell = styled(Cell)`
  height: 40px;
  line-height: 40px;

  border-bottom: 1px solid #d8d8d8;
`;

export type Props = {
  columnList: Column[];
  rowList: any[];
};

export const Table: FC<Props> = props => {
  const { columnList, rowList } = props;
  return (
    <TableContainer>
      <HeaderLine>
        {columnList.map(col => (
          <HeaderCell key={`head_${col.name}`}>{col.title}</HeaderCell>
        ))}
        <Filler />
      </HeaderLine>
      {rowList.map(row => (
        <RowLine>
          {columnList.map(col => (
            <RowCell key={`${row.id}_${col.name}`}>
              {new String(row[col.name])}
            </RowCell>
          ))}
          <Filler />
        </RowLine>
      ))}
    </TableContainer>
  );
};
