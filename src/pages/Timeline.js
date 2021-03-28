import React from 'react'
import * as Mui from '@material-ui/core';
import * as Muilab from '@material-ui/lab';

export default function Timeline() {

    return (
        <div>
            <Mui.Paper className="pt-4">
                <Mui.Typography variant="h5">Core Game History</Mui.Typography>
                <Muilab.Timeline align="alternate" id="timeline">

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                            <Muilab.TimelineDot/>
                            <Muilab.TimelineConnector style={{height: '250px'}} />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <div className="text-left">
                            <strong>1996</strong>
                            <br/>                            
                            <strong>Red, Green, and Blue Version</strong>
                            <br/>                            
                            They are the first installments of the Pokémon video game series. They were first released in Japan in 1996 as Pocket Monsters: Red and Pocket Monsters: Green, with the special edition Pocket Monsters: Blue
                        </div>
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary"/>
                        <Muilab.TimelineConnector style={{height: '250px'}} />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <strong>1999</strong>
                        <br/>
                        <strong>Gold & Silver Version</strong>                        
                        <br/>
                         They are the first installments in the second generation of the Pokémon video game series. They were released in Japan in 1999, Australia and North America in 2000, and Europe in 2001.
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                            <Muilab.TimelineConnector style={{height: '250px'}} />
                            </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <div className="text-left">
                            <strong>2002</strong>
                            <br/>
                            <strong>Ruby & Sapphire Version</strong>                            
                            <br/>
                            They are the first installments in the third generation of the Pokémon video game series, also known as the "advanced generation".  They were first released in Japan in late 2002 and internationally in 2003.
                        </div>
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                        <Muilab.TimelineConnector style={{height: '250px'}} />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <strong>2006</strong>
                        <br/>
                        <strong>Diamond & Pearl Version</strong>
                        <br/>           
                        They are the first installments in the fourth generation of the Pokémon video game series. They were first released in Japan on September 28, 2006, and released in North America, Australia, and Europe in 2007.             
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                            <Muilab.TimelineConnector style={{height: '250px'}} />
                            </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <div className="text-left">
                            <strong>2010</strong>
                            <br/>
                            <strong>Black & White Version</strong>
                            <br/>     
                            They are the first installments in the fifth generation of the Pokémon video game series. First released in Japan on 18 September 2010, they were later released in Europe, North America and Australia in 2011.                        
                        </div>
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                        <Muilab.TimelineConnector style={{height: '250px'}} />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <strong>2013</strong>
                        <br/>
                        <strong>X & Y Version</strong>
                        <br/>
                         They are the first installments in the sixth generation of the main Pokémon video game series. First announced in January 2013 by former Nintendo president Satoru Iwata through a special Nintendo Direct.
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                            <Muilab.TimelineConnector style={{height: '250px'}} />
                            </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <div className="text-left">
                            <strong>2016</strong>
                            <br/>
                            <strong>Sun & Moon Version</strong>
                            <br/>
                            They are the first installments in the seventh generation of the Pokémon video game series. First announced in February 2016, Sun and Moon were released worldwide on 18 November 2016, commemorating the franchise's 20th anniversary.                            
                        </div>
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot color="secondary" />
                        <Muilab.TimelineConnector style={{height: '250px'}} />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent>
                        <strong>2019</strong>
                        <br/>
                        <strong>Sword & Shield Version</strong>
                        <br/>                        
                        They are the first installments in the eighth generation of the Pokémon video game series and the second in the series, following Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, released on a home game console.
                        </Muilab.TimelineContent>
                    </Muilab.TimelineItem>

                    <Muilab.TimelineItem>
                        <Muilab.TimelineSeparator>
                        <Muilab.TimelineDot />
                        </Muilab.TimelineSeparator>
                        <Muilab.TimelineContent className="text-left"><strong>Coming Soon ...</strong></Muilab.TimelineContent>
                    </Muilab.TimelineItem>
                </Muilab.Timeline>        
            </Mui.Paper>
        </div>
    )
}
