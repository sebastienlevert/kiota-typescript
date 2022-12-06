import {KeyCredential, PasswordCredential} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddKeyPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The keyCredential property */
    keyCredential?: KeyCredential;
    /** The passwordCredential property */
    passwordCredential?: PasswordCredential;
    /** The proof property */
    proof?: string;
}
