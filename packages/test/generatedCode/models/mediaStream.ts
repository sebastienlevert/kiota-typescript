import {MediaDirection} from './mediaDirection';
import {Modality} from './modality';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaStream extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The direction property */
    direction?: MediaDirection;
    /** The media stream label. */
    label?: string;
    /** The mediaType property */
    mediaType?: Modality;
    /** The OdataType property */
    odataType?: string;
    /** If the media is muted by the server. */
    serverMuted?: boolean;
    /** The source ID. */
    sourceId?: string;
}
