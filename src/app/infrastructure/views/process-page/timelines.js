import React from 'react'
import { useSelector } from 'react-redux'
import { Timeline } from '../../components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import MockIcon from './mockIcon'
import data from './data'

const Timelines = () => {
  const option = useSelector((state) => state.viewOption)
  const selected = data.filter((s) => s.id === option.option.option)
  return (
    <>
      <VerticalTimeline>
        {selected[0].step.map((t, id) => (
          <Timeline key={id} step={t} />
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<MockIcon />}
        />
      </VerticalTimeline>
    </>
  )
}

export default Timelines
