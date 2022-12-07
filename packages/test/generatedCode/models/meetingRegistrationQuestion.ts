import {AnswerInputType} from './answerInputType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingRegistrationQuestion extends Entity, Partial<Parsable> {
    /** The answerInputType property */
    answerInputType?: AnswerInputType;
    /** Answer options when answerInputType is radioButton. */
    answerOptions?: string[];
    /** Display name of the custom registration question. */
    displayName?: string;
    /** Indicates whether the question is required. Default value is false. */
    isRequired?: boolean;
}
