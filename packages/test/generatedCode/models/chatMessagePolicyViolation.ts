import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {ChatMessagePolicyViolationPolicyTip} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessagePolicyViolation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The dlpAction property */
    dlpAction?: ChatMessagePolicyViolationDlpActionTypes;
    /** Justification text provided by the sender of the message when overriding a policy violation. */
    justificationText?: string;
    /** The policyTip property */
    policyTip?: ChatMessagePolicyViolationPolicyTip;
    /** The userAction property */
    userAction?: ChatMessagePolicyViolationUserActionTypes;
    /** The verdictDetails property */
    verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes;
}
