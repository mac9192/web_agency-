import React from 'react';

const Features = () => (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. 
                Our software is tailor-made for modern digital product teams.
            </p>

        </div>

{/*Numbered List Container  col- everything in this div*/}
        <div className="flex flex-col space-y-8 md:w-1/2"> 

{/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            01
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                            Track Company Wide Progress
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                    Track Company Wide Progress
                </h3>
                <p className=" text-darkGrayishBlue">
                    See how your day-to-day tasks fit into the wider version.
                    Go from tracking progress at the milestone level all the
                    done to the smallest of details. Never lose sight of the bigger
                    picture again.
                </p>
             </div>

            </div>

            {/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            02
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Advanced built-in reports
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                Advanced built-in reports
                </h3>
                <p className=" text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
                </p>
             </div>

            </div>
            {/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                            03
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                             Everything you need in one place
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                    Everything you need in one place
                </h3>
                <p className=" text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
                </p>
             </div>

            </div>
  

        </div>
     
    </div>
);

export default Features;
