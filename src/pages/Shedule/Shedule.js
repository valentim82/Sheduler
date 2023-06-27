import React from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import ProgressStepper from '../../components/common/ProgressStepper/ProgressStepper';

const steps = ['Phase 1', 'Phase 2', 'Phase 3'];
const stepDescription = ['Description 1', 'Description 2', 'Description 3'];

const Shedule = () => {
    return (
        <GridWrapper>
            <BasicCard
                content={
                    <ProgressStepper
                        steps={steps}
                        stepDescription={stepDescription}
                    />
                } 
            />
        </GridWrapper>
    )
}

export default Shedule
