import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';

import './CustomTab.css';

const CustomTab = ({ data, defaultValue }) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="mds-tabs-container">
            <div className="mdc-tab-bar" role="tablist">
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content"></div>
                        <Box sx={{ width: '100%' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs textColor='inherit' TabIndicatorProps={{
                                        style: {
                                            backgroundColor: 'red'
                                        }
                                    }} indicatorColor="secondary" value={value} onChange={handleChange} centered>
                                        {
                                            data.headers.map((header, index) => {
                                                return (
                                                    <Tab key={`tabHeader${index}`} className='mdc-tab mdc-tab__text-label' label={header} value={index} />
                                                )
                                            })
                                        }
                                    </Tabs>
                                </Box>
                                {
                                    data.descriptions.map((desc, index) => {
                                        return (
                                            <TabPanel key={`tabSummary${index}`} value={index} className='mdc-tab-content'>{desc}</TabPanel>
                                        )
                                    })
                                }
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomTab;