import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageAttachment extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content of the attachment. If the attachment is a rich card, set the property to the rich card object. This property and contentUrl are mutually exclusive. */
    content?: string;
    /** The media type of the content attachment. It can have the following values: reference: Attachment is a link to another file. Populate the contentURL with the link to the object.Any contentTypes supported by the Bot Framework's Attachment objectapplication/vnd.microsoft.card.codesnippet: A code snippet. application/vnd.microsoft.card.announcement: An announcement header. */
    contentType?: string;
    /** URL for the content of the attachment. Supported protocols: http, https, file and data. */
    contentUrl?: string;
    /** Read-only. Unique id of the attachment. */
    id?: string;
    /** Name of the attachment. */
    name?: string;
    /** The ID of the Teams app that is associated with the attachment. The property is specifically used to attribute a Teams message card to the specified app. */
    teamsAppId?: string;
    /** URL to a thumbnail image that the channel can use if it supports using an alternative, smaller form of content or contentUrl. For example, if you set contentType to application/word and set contentUrl to the location of the Word document, you might include a thumbnail image that represents the document. The channel could display the thumbnail image instead of the document. When the user clicks the image, the channel would open the document. */
    thumbnailUrl?: string;
}
