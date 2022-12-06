import {AnswerInputType} from './answerInputType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingQuestionAnswer extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The answer given by the user in case the answerInputType is text. */
    answer?: string;
    /** The expected answer type. The possible values are: text, radioButton, unknownFutureValue. */
    answerInputType?: AnswerInputType;
    /** In case the answerInputType is radioButton, this will consists of a list of possible answer values. */
    answerOptions?: string[];
    /** Indicates whether it is mandatory to answer the custom question. */
    isRequired?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The question. */
    question?: string;
    /** The ID of the custom question. */
    questionId?: string;
    /** The answers selected by the user. */
    selectedOptions?: string[];
}
