import React, { Component, Fragment } from 'react';
import ContentViewItems from './ContentViewItems.js';

class ContentViewSections extends Component {
  getSectionKey = (section) => (`section-${section.type}`)
  getItemSize = (section) => ((section.type === 'horizontal') ? 'large' : 'small')

  render() {
    console.log(this.props.sections)
    return this.props.sections.map((section, index) => (
      <Fragment key={index}>
        <h1 className='content-view-section-title'>{section.name}</h1>
        <div className='content-view-section' type={section.type}>
          <ContentViewItems articles={section.articles} previewSize={this.getItemSize(section)}/>
        </div>
      </Fragment>
    ));
  }

}

export default ContentViewSections;