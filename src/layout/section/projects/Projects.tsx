import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { ProjectItem } from './projectItem/ProjectItem';
import project_1 from '../../../asests/img/project_1.png';
import project_2 from '../../../asests/img/project_2.png';
import project_3 from '../../../asests/img/project_3.png';
import project_4 from '../../../asests/img/project_4.png';
import project_5 from '../../../asests/img/project_5.png';
import project_6 from '../../../asests/img/project_6.png';

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle title="Projects" description="Things I’ve built so far" />
      <FlexWrapper wrap="wrap">
        <ProjectItem image={{ src: project_1, alt: 'project_1' }} />
        <ProjectItem image={{ src: project_2, alt: 'project_1' }} />
        <ProjectItem image={{ src: project_3, alt: 'project_1' }} />
        <ProjectItem image={{ src: project_4, alt: 'project_1' }} />
        <ProjectItem image={{ src: project_5, alt: 'project_1' }} />
        <ProjectItem image={{ src: project_6, alt: 'project_1' }} />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
