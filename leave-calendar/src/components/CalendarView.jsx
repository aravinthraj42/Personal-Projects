import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: { 'en-US': enUS },
});

const CalendarView = ({ events }) => {
    const eventStyleGetter = (event) => {
        let color = {
            Planned: '#34d399',
            Sick: '#f87171',
            WFH: '#60a5fa',
            Other: '#fbbf24',
        }[event.type] || '#9ca3af';

        return {
            style: {
                backgroundColor: color,
                color: 'white',
                borderRadius: '4px',
                padding: '2px',
            },
        };
    };

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventStyleGetter}
            style={{ height: 500, marginTop: '2rem' }}
        />
    );
};

export default CalendarView;
