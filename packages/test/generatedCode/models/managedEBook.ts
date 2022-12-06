import {DeviceInstallState, EBookInstallSummary, Entity, ManagedEBookAssignment, MimeContent, UserInstallStateSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedEBook extends Entity, Partial<Parsable> {
    /** The list of assignments for this eBook. */
    assignments?: ManagedEBookAssignment[];
    /** The date and time when the eBook file was created. */
    createdDateTime?: Date;
    /** Description. */
    description?: string;
    /** The list of installation states for this eBook. */
    deviceStates?: DeviceInstallState[];
    /** Name of the eBook. */
    displayName?: string;
    /** The more information Url. */
    informationUrl?: string;
    /** Mobile App Install Summary. */
    installSummary?: EBookInstallSummary;
    /** Book cover. */
    largeCover?: MimeContent;
    /** The date and time when the eBook was last modified. */
    lastModifiedDateTime?: Date;
    /** The privacy statement Url. */
    privacyInformationUrl?: string;
    /** The date and time when the eBook was published. */
    publishedDateTime?: Date;
    /** Publisher. */
    publisher?: string;
    /** The list of installation states for this eBook. */
    userStateSummary?: UserInstallStateSummary[];
}
