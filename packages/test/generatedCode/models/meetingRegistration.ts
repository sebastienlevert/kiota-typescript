import {MeetingRegistrationBase, MeetingRegistrationQuestion, MeetingSpeaker} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingRegistration extends MeetingRegistrationBase, Partial<Parsable> {
    /** Custom registration questions. */
    customQuestions?: MeetingRegistrationQuestion[];
    /** The description of the meeting. */
    description?: string;
    /** The meeting end time in UTC. */
    endDateTime?: Date;
    /** The number of times the registration page has been visited. Read-only. */
    registrationPageViewCount?: number;
    /** The URL of the registration page. Read-only. */
    registrationPageWebUrl?: string;
    /** The meeting speaker's information. */
    speakers?: MeetingSpeaker[];
    /** The meeting start time in UTC. */
    startDateTime?: Date;
    /** The subject of the meeting. */
    subject?: string;
}
