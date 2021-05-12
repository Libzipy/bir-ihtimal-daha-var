import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import MockIcon from './mockIcon'

const Timeline = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '$dark-gray-color' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="1.Adim"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MockIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '$dark-gray-color' }}
          date="2.adim"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '$dark-gray-color' }}
          icon={<MockIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '$dark-gray-color' }}
          date="3.adim"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<MockIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '$dark-gray-color' }}
          date="4.adim"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<MockIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<MockIcon />}
        />
      </VerticalTimeline>
    </>
  )
}

export default Timeline
