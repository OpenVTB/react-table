import React, { FC } from 'react';
import styled from 'styled-components';

import { myTheme } from '../theme';

export type Column = {
  name: string;
  title: string;
};

const Cell = styled.div`
  box-sizing: border-box;
  padding: 10px 12px;
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableContainer = styled.div`
  background: #ffffff;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;

  ${myTheme.fonts['SubTitle / SubTitle 3']};

  border-bottom: 1px solid #d8d8d8;
`;

const HeaderCell = styled(Cell)`
  &:hover {
    background: #e7e7e7;
    cursor: pointer;
  }
`;

const Filler = styled(HeaderCell)`
  flex: 1 1 auto;
`;

const Row = styled.div`
  ${myTheme.fonts['Body / 13 Small']};
  display: flex;
  border-bottom: 1px solid #d8d8d8;
`;

const RowCell = styled(Cell)`
  height: 40px;
`;

export type RowProps = {
  height?: number | string;
};

export const defaultRowProps: RowProps = {
  height: 40,
};

export type Props = {
  style?: any;
  className?: string;
  columnList: Column[];
  rowList: any[];
  row?: RowProps;
};

export const Table: FC<Props> = props => {
  const { columnList, rowList, style, className } = props;
  const rowProps = { ...defaultRowProps, ...props.row };
  return (
    <TableContainer className={className} style={style}>
      <Header style={{ height: rowProps.height }}>
        {columnList.map(col => (
          <HeaderCell key={`head_${col.name}`}>{col.title}</HeaderCell>
        ))}
        <Filler />
      </Header>
      {rowList.map(row => (
        <Row key={`row_${row.id}`} style={{ height: rowProps.height }}>
          {columnList.map(col => (
            <RowCell key={`${row.id}_${col.name}`}>
              {new String(row[col.name])}
            </RowCell>
          ))}
          <Filler />
        </Row>
      ))}
    </TableContainer>
  );
};

Table.defaultProps = {
  row: defaultRowProps,
};
