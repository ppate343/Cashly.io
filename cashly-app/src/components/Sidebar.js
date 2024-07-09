import React from 'react';
import { FaNotesMedical } from "react-icons/fa6";
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as LuIcons from "react-icons/lu";
import * as ImIcons from "react-icons/im";

export const Sidebar = [
  {
    title: 'User Details',
    path: '/',
    icon: <FaIcons.FaRegUserCircle/>,
    cName: 'nav-text'
  },
  {
    title: 'Cashly CRM',
    path: 'https://app.gocashly.io/',
    icon: <LuIcons.LuExternalLink />,
    cName: 'nav-text'
  },
  {
    title: 'Calculators',
    path: '/calculators',
    icon: <ImIcons.ImCalculator/>,
    cName: 'nav-text'
  },
  {
    title: 'Lender Qualifier',
    path: '/lender-qualifier',
    icon: <FaIcons.FaLaptopHouse/>,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <FaNotesMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Cashly Copilot',
    path: '/cashly-copilot',
    icon: <LuIcons.LuBrainCircuit/>,
    cName: 'nav-text'
  },
 
  {
    title: 'Tech Services',
    path: '/tech-services',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
];