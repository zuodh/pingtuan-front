package com.pingtuan.fresh.jwt;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * Created by zuodaohui on 2017/3/16.
 */
@Data
@Configuration(value="classpath:jwt.properties")
@ConfigurationProperties(prefix = "audience")
public class Audience implements Serializable{
    private String clientId;
    private String base64Secret;
    private String name;
    private int expiresSecond;

}
