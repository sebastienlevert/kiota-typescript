import {ItemBody, ServiceAnnouncementAttachment, ServiceAnnouncementBase, ServiceUpdateMessageViewpoint} from './index';
import {ServiceUpdateCategory} from './serviceUpdateCategory';
import {ServiceUpdateSeverity} from './serviceUpdateSeverity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUpdateMessage extends Partial<Parsable>, ServiceAnnouncementBase {
    /** The expected deadline of the action for the message. */
    actionRequiredByDateTime?: Date;
    /** A collection of serviceAnnouncementAttachments. */
    attachments?: ServiceAnnouncementAttachment[];
    /** The zip file that contains all attachments for a message. */
    attachmentsArchive?: string;
    /** The body property */
    body?: ItemBody;
    /** The category property */
    category?: ServiceUpdateCategory;
    /** Indicates whether the message has any attachment. */
    hasAttachments?: boolean;
    /** Indicates whether the message describes a major update for the service. */
    isMajorChange?: boolean;
    /** The affected services by the service message. */
    services?: string[];
    /** The severity property */
    severity?: ServiceUpdateSeverity;
    /** A collection of tags for the service message. Tags are provided by the service team/support team who post the message to tell whether this message contains privacy data, or whether this message is for a service new feature update, and so on. */
    tags?: string[];
    /** Represents user viewpoints data of the service message. This data includes message status such as whether the user has archived, read, or marked the message as favorite. This property is null when accessed with application permissions. */
    viewPoint?: ServiceUpdateMessageViewpoint;
}
