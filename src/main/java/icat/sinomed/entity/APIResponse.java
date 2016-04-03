package icat.sinomed.entity;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by liucong on  16-3-25-025.
 */

public class APIResponse {
    private String              message;
    private Status              status;
    private String              code;
    private Map<String, Object> data;

    public enum Status {
        SUCCESS, ERROR, UNDEFINED
    }

    public APIResponse() {
        this("", Status.UNDEFINED);
    }

    public APIResponse(String message, Status status) {
        this(message, status, "");
    }

    public APIResponse(String message, Status status, String code) {
        this.message = message;
        this.status = status;
        this.code = code;
        this.data = new HashMap<>();
    }

    public String getMessage() {
        return message;
    }

    public APIResponse setMessage(String message) {
        this.message = message;
        return this;
    }

    public Status getStatus() {
        return status;
    }

    public APIResponse setStatus(Status status) {
        this.status = status;
        return this;
    }

    public String getCode() {
        return code;
    }

    public APIResponse setCode(String code) {
        this.code = code;
        return this;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public APIResponse setData(Map<String, Object> data) {
        this.data = data;
        return this;
    }

    public APIResponse setDataValue(String key, Object value){
        this.data.put(key, value);
        return this;
    }

}
