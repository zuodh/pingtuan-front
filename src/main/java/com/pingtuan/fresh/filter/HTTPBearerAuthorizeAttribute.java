package com.pingtuan.fresh.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pingtuan.fresh.jwt.Audience;
import com.pingtuan.fresh.util.JwtHelper;
import com.pingtuan.fresh.vo.ResultMsg;
import com.pingtuan.fresh.vo.ResultStatusCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by zuodaohui on 2017/3/16.
 */
public class HTTPBearerAuthorizeAttribute implements Filter {
    @Autowired
    private Audience audienceEntity;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // TODO Auto-generated method stub
        SpringBeanAutowiringSupport.processInjectionBasedOnServletContext(this,
                filterConfig.getServletContext());

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        // TODO Auto-generated method stub

        ResultMsg resultMsg;
        HttpServletRequest httpRequest = (HttpServletRequest)request;
        String auth = httpRequest.getHeader("Authorization");
        if ((auth != null) && (auth.length() > 7))
        {
            String HeadStr = auth.substring(0, 6).toLowerCase();
            if (HeadStr.compareTo("bearer") == 0)
            {

                auth = auth.substring(7, auth.length());
                if (JwtHelper.parseJWT(auth, audienceEntity.getBase64Secret()) != null)
                {
                    chain.doFilter(request, response);
                    return;
                }
            }
        }

        HttpServletResponse httpResponse = (HttpServletResponse) response;
        httpResponse.setCharacterEncoding("UTF-8");
        httpResponse.setContentType("application/json; charset=utf-8");
        httpResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        ObjectMapper mapper = new ObjectMapper();

        resultMsg = new ResultMsg(ResultStatusCode.INVALID_TOKEN.getErrcode(), ResultStatusCode.INVALID_TOKEN.getErrmsg(), null);
        httpResponse.getWriter().write(mapper.writeValueAsString(resultMsg));
        return;
    }

    @Override
    public void destroy() {
        // TODO Auto-generated method stub

    }
}
