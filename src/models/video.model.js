import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //url for videofile
            required: true
        },
        thumbnail: {
            type: String, //url for videofile
            required: true
        },
       title: {
            type: String, //url for videofile
            required: true
        },
        description: {
            type: String, //url for videofile
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema)