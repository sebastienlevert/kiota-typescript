import {ClonableTeamParts} from '../../../models/clonableTeamParts';
import {TeamVisibilityType} from '../../../models/teamVisibilityType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ClonePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The classification property */
    classification?: string;
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The mailNickname property */
    mailNickname?: string;
    /** The partsToClone property */
    partsToClone?: ClonableTeamParts;
    /** The visibility property */
    visibility?: TeamVisibilityType;
}
