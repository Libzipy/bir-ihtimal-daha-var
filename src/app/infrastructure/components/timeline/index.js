import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import MockIcon from './mockIcon'

/* eslint-disable react/prop-types */
const Timeline = (props) => {
  const p = props.step
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '$black-color' }}
          // date={p.title}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MockIcon />}
          position={p.position}
        >
          <h3 className="vertical-timeline-element-title">{p.title}</h3>
          <p>{p.text}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}

export default Timeline
