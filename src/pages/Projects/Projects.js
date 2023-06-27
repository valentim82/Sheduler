import React, { useState } from 'react'
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import IconButton from '@mui/material/IconButton';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardHeaderStyles } from './styles';
import NewProjectModal from '../../components/Modals/NewProjectModal/NewProjectModal';

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [searchResults, setSearchResults] = useState(projects);

    const getHeader = () => {
        const handleSearch = (value) => {
            filterData(value);
        };

        const filterData = (value) => {
            const lowercasedValue = value.toLowerCase().trim();
            if (lowercasedValue === '') setProjects(searchResults);
            else {
                const filteredData = searchResults.filter((item) => {
                    return Object.keys(item).some((key) => 
                    item[key].toString().toLowerCase().includes(lowercasedValue)
                    );
                });
                setProjects(filteredData)
            };
        };

        const addProject = () => {
            setOpen(true);
        };

      
          
        
      

        return (
            <Box sx={cardHeaderStyles.wrapper}>
                <SearchBar 
                    placeholder="Search by name, manager or phase"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton 
                        variant="contained"
                        onClick={addProject}
                        size="small"
                        sx={cardHeaderStyles.addProjectButton}
                    >
                        Add Projects
                    </CommonButton>

                    <CommonButton 
                        variant="contained"
                        
                        size="small"
                        sx={cardHeaderStyles.addProjectButton}
                    >
                        Save
                    </CommonButton>

                    
                    
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                </Box>


                
            </Box>
            

            
        )
    };

    const addNewProject = (data) => {
        //projects.push({ ...data });
        setProjects([...projects,data]);
        setOpen(false);
        
    };

    const getContent = () => (
        <>
            {
                projects.length ? 
                    projects.map((project) => (
                        <Box sx={{ marginBottom: '20px' }}>
                            <Typography>Project Name: {project.name}</Typography>
                            <Typography>Manager: {project.manager}</Typography>
                            <Typography>Phase 1: {project.phase1}</Typography>
                            <Typography>Phase 2: {project.phase2}</Typography>
                            <Typography>Phase 3: {project.phase3}</Typography>
                            
                        </Box>
                    )) :
                    <Typography 
                        align="center"
                        sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
                    >
                        No projects yet
                    </Typography>
            }
        </>
    );

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={getContent()}
            />
            <NewProjectModal open={open} onClose={() => setOpen(false)} addNewProject={addNewProject}/>
        </GridWrapper>
    )
}

export default Projects;
