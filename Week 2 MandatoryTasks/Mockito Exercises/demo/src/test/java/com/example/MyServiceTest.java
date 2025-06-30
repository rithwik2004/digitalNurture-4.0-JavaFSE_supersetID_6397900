package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {
//Exercise 1 from here
    @Test
    public void testExternalApi() {
        
        ExternalApi mockApi = mock(ExternalApi.class);
        
        when(mockApi.getData()).thenReturn("Mock Data");
        
        MyService service = new MyService(mockApi);
        
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
//Exercise 2 from here
    @Test
    public void testVerifyInteraction() {
        
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}
