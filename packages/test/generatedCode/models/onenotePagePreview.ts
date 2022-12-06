import {OnenotePagePreviewLinks} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePagePreview extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The links property */
    links?: OnenotePagePreviewLinks;
    /** The OdataType property */
    odataType?: string;
    /** The previewText property */
    previewText?: string;
}
