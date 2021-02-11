import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from '@openvtb/react-ui-kit';
import { myTheme } from '../theme';
import { RowWidthResizer } from './RowWidthResizer';

export const DEFAULT_COLUMN_WIDTH = 100;

export type Column = {
  name: string;
  title: string;
  width?: number;
};

const Cell = styled.div`
  box-sizing: border-box;
  padding: 0 12px;
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CheckboxCell = styled.div`
  padding: 10px 0 10px 10px;
`;

const TableContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const Header = styled.div`
  flex: 0 0 auto;
  overflow-x: hidden;

  box-sizing: border-box;
  display: flex;

  ${myTheme.fonts['SubTitle / SubTitle 3']};

  border-bottom: 1px solid #d8d8d8;
`;

const HeaderCell = styled(Cell)`
  position: relative;
  &:hover {
    background: #e7e7e7;
    cursor: pointer;
  }
`;

const Filler = styled(Cell)`
  flex: 1 1 auto;
  width: unset;
`;

const ScrollTableBody = styled.div`
  overflow: auto;
  flex: 1 1 auto;
`;

const Row = styled.div`
  ${myTheme.fonts['Body / Body 2 Short']};
  display: flex;
  border-bottom: 1px solid #d8d8d8;
  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
`;

const RowCell = styled(Cell)<{ height?: number | string }>`
  line-height: ${props => props.height}px;
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
  displayRowSelectionColumn?: boolean;
  onRowSelectionChange: (idSelectionStatusMap: object) => void;
};

export const Table: FC<Props> = props => {
  const {
    columnList,
    rowList,
    style,
    className,
    displayRowSelectionColumn,
    onRowSelectionChange,
  } = props;
  const rowProps = { ...defaultRowProps, ...props.row };
  const [checked, setChecked] = useState({} as any);
  const [cols, setColumns] = useState([...columnList]);
  function handleRowSelectionChange(idSelectionStatusMap: object) {
    onRowSelectionChange(idSelectionStatusMap);
    setChecked(idSelectionStatusMap);
  }
  function handleCheckboxChange(id: string) {
    handleRowSelectionChange({ ...checked, [id]: !checked[id] });
  }
  const allRowsChecked = rowList.every(row => checked[row.id]);
  const someRowsChecked = rowList.some(row => checked[row.id]);
  function handleHeaderCheckboxChange() {
    const toRemove = rowList.reduce((ids, row) => {
      ids[row.id] = !someRowsChecked;
      return ids;
    }, {});
    handleRowSelectionChange({ ...checked, ...toRemove });
  }

  function handleResizeChange({ key, width }: { key: string; width: number }) {
    const newColumns = cols.map(column =>
      column.name === key
        ? {
            ...column,
            width: width > DEFAULT_COLUMN_WIDTH ? width : DEFAULT_COLUMN_WIDTH,
          }
        : column
    );
    setColumns(newColumns);
  }
  return (
    <TableContainer className={className} style={style}>
      <Header style={{ height: rowProps.height }}>
        {displayRowSelectionColumn && (
          <CheckboxCell>
            <Checkbox
              size={'small'}
              checked={allRowsChecked}
              indeterminate={someRowsChecked && !allRowsChecked}
              onChange={handleHeaderCheckboxChange}
            />
          </CheckboxCell>
        )}
        {cols.map(({ name, title, width = DEFAULT_COLUMN_WIDTH }) => (
          <HeaderCell
            key={`head_${name}`}
            style={{ lineHeight: `${rowProps.height}px`, width: width }}
          >
            {title}
            <RowWidthResizer
              id={name}
              width={width ? width : DEFAULT_COLUMN_WIDTH}
              onChange={handleResizeChange}
            />
          </HeaderCell>
        ))}
        <Filler />
      </Header>
      <ScrollTableBody>
        {rowList.map(row => (
          <Row key={`row_${row.id}`} style={{ height: rowProps.height }}>
            {displayRowSelectionColumn && (
              <CheckboxCell>
                <Checkbox
                  size={'small'}
                  checked={checked[row.id]}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </CheckboxCell>
            )}
            {cols.map(col => (
              <RowCell
                height={rowProps.height}
                key={`${row.id}_${col.name}`}
                style={{ width: col.width || DEFAULT_COLUMN_WIDTH }}
              >
                {String(row[col.name])}
              </RowCell>
            ))}
            <Filler />
          </Row>
        ))}
      </ScrollTableBody>
    </TableContainer>
  );
};

Table.defaultProps = {
  row: defaultRowProps,
  displayRowSelectionColumn: true,
  onRowSelectionChange: () => {},
};
