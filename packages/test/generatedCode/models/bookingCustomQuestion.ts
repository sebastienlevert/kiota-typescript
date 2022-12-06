import {AnswerInputType} from './answerInputType';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BookingCustomQuestion extends Entity, Partial<Parsable> {
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    answerInputType?: AnswerInputType;
    /** List of possible answer values. */
    answerOptions?: string[];
    /** The question. */
    displayName?: string;
}
