import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

interface CalenderProps {
  date: string
}

const css = `
    .rdp-caption {
        display: none;
    }

    .rdp-cell {
        cursor: default;
    }

    .rdp-head_cell {
        font-weight: 500;
        font-size: 14px;
        font-weight: bold;
    }

    .rdp-day_selected {
        background-color: var(--red);
        font-weight: bold;
        color: #fff;
    }

    .rdp-day_selected:hover {
        background-color: var(--red);
    }
`

export default function Calendar({ date }: CalenderProps) {
  const weddingDate = parseISO(date)
  console.log(weddingDate)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd', { locale: ko })}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}