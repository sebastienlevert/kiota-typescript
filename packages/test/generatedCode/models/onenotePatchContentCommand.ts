import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePatchContentCommand extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** The action property */
    action?: OnenotePatchActionType;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A string of well-formed HTML to add to the page, and any image or file binary data. If the content contains binary data, the request must be sent using the multipart/form-data content type with a 'Commands' part. */
    content?: string;
    /** The OdataType property */
    odataType?: string;
    /** The location to add the supplied content, relative to the target element. The possible values are: after (default) or before. */
    position?: OnenotePatchInsertPosition;
    /** The element to update. Must be the #<data-id> or the generated <id> of the element, or the body or title keyword. */
    target?: string;
}
