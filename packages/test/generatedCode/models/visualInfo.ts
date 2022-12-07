import {ImageInfo, Json} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VisualInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The attribution property */
    attribution?: ImageInfo;
    /** Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color */
    backgroundColor?: string;
    /** The content property */
    content?: Json;
    /** Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata) */
    description?: string;
    /** Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation) */
    displayText?: string;
}
